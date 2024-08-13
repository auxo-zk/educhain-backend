import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Ipfs } from './ipfs/ipfs';
import { IpfsController } from './ipfs/ipfs.controller';
import { Network } from './network/network';
import { NonPrivacyModule } from './non-privacy/non-privacy.module';
import { HttpModule } from '@nestjs/axios';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BuildersController } from './builders/builders.controller';
import { BuildersService } from './builders/builders.service';
import { OrganizersController } from './organizers/organizers.controller';
import { OrganizersService } from './organizers/organizers.service';
import { JwtModule } from '@nestjs/jwt';
import { Builder, BuilderSchema } from './schemas/builder.schema';
import { Organizer, OrganizerSchema } from './schemas/organizer.schema';
import { ObjectStorageController } from './object-storage/object-storage.controller';
import { ObjectStorageService } from './object-storage/object-storage.service';
import { CourseDraft, CourseDraftSchema } from './schemas/course-draft';

@Module({
    imports: [
        MongooseModule.forRoot(process.env.DB, {
            connectTimeoutMS: 10000,
            socketTimeoutMS: 10000,
        }),
        MongooseModule.forFeature([
            {
                name: Builder.name,
                schema: BuilderSchema,
            },
            {
                name: Organizer.name,
                schema: OrganizerSchema,
            },
            {
                name: CourseDraft.name,
                schema: CourseDraftSchema,
            },
        ]),
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '100d' },
        }),
        NonPrivacyModule,
        HttpModule,
    ],
    controllers: [
        AppController,
        IpfsController,
        AuthController,
        BuildersController,
        OrganizersController,
        ObjectStorageController,
    ],
    providers: [
        AppService,
        Ipfs,
        Network,
        AuthService,
        BuildersService,
        OrganizersService,
        ObjectStorageService,
    ],
})
export class AppModule {}
