import {
    BadRequestException,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { randomBytes } from 'crypto';
import { ethers } from 'ethers';
import { authTimeLimit } from 'src/constants';
import { AuthenticationDto } from 'src/dtos/authentication.dto';
import { ServerSignature } from 'src/entities/server-signature.entity';
import { JwtPayload } from 'src/interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    async verifySignature(authenticationDto: AuthenticationDto) {
        const msgRaw = JSON.parse(authenticationDto.serverSignature.msg);
        const time = Date.parse(msgRaw['time']);
        const now = new Date().getTime();
        if (now - time >= 0 && now - time <= authTimeLimit) {
            const serverWallet = new ethers.Wallet(
                process.env.SERVER_PRIVATE_KEY,
            );
            const recoveredServerAddress = ethers.verifyMessage(
                authenticationDto.serverSignature.msg,
                authenticationDto.serverSignature.signature,
            );
            // console.log(recoveredServerAddress);
            // console.log(serverWallet.address);
            if (recoveredServerAddress != serverWallet.address) {
                // console.log('1');
                throw new BadRequestException();
            }
            const recoveredUserAddress = ethers.verifyMessage(
                authenticationDto.serverSignature.msg,
                authenticationDto.signature,
            );
            if (recoveredUserAddress != authenticationDto.address) {
                // console.log('2');
                throw new BadRequestException();
            }

            const payload: JwtPayload = {
                sub: authenticationDto.address,
                role: authenticationDto.role,
            };
            const accessToken = await this.jwtService.signAsync(payload);
            return accessToken;
        } else {
            // console.log('here');
            throw new BadRequestException();
        }
    }

    async createServerSignature(): Promise<ServerSignature> {
        const msgRaw = {
            nonce: randomBytes(32).toString('hex'),
            time: new Date().toISOString(),
        };
        const msg = JSON.stringify(msgRaw);
        const serverWallet = new ethers.Wallet(process.env.SERVER_PRIVATE_KEY);
        const signature = await serverWallet.signMessage(msg);
        const serverSignature: ServerSignature = {
            msg: msg,
            signature: signature,
        };
        return serverSignature;
    }
}
