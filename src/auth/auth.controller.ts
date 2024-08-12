import {
    Body,
    Controller,
    Get,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthenticationDto } from 'src/dtos/authentication.dto';
import { ServerSignature } from 'src/entities/server-signature.entity';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post()
    @ApiTags('Auth')
    async authenticate(
        @Body() authenticationDto: AuthenticationDto,
    ): Promise<string> {
        return await this.authService.verifySignature(authenticationDto);
    }

    @Get()
    @ApiTags('Auth')
    async requestAuth(): Promise<ServerSignature> {
        return await this.authService.createServerSignature();
    }

    @Get('profile')
    @ApiTags('Auth')
    @ApiBearerAuth('access-token')
    @UseGuards(AuthGuard)
    async getProfile(@Request() req) {
        return req.user;
    }
}
