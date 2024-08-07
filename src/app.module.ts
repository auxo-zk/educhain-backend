import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Ipfs } from './ipfs/ipfs';
import { IpfsController } from './ipfs/ipfs.controller';
import { Network } from './network/network';
import { NonPrivacyModule } from './non-privacy/non-privacy.module';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [NonPrivacyModule, HttpModule],
    controllers: [AppController, IpfsController],
    providers: [AppService, Ipfs, Network],
})
export class AppModule {}
