import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNumber, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';
import { FileInformation } from 'src/entities/file-information.entity';

class TokenInfo {
    @Prop()
    address: string;

    @Prop()
    name: string;

    @Prop()
    symbol: string;

    @Prop()
    decimals: number;
}

class CourseMember {
    @Prop()
    name?: string;

    @Prop()
    role?: string;

    @Prop()
    link?: string;

    @Prop()
    publicKey?: string;
}

@Schema({ versionKey: false })
export class CourseDraft {
    @Prop({ index: true, required: true })
    address: string;

    @Prop()
    name?: string;

    @Prop()
    avatarImage?: string;

    @Prop()
    coverImage?: string;

    @Prop()
    publicKey?: string;

    @Prop()
    description?: string;

    @Prop()
    problemStatement?: string;

    @Prop()
    solution?: string;

    @Prop()
    challengeAndRisk?: string;

    @Prop()
    members?: CourseMember[];

    @Prop({ type: FileInformation, default: [] })
    documents?: FileInformation[];

    @Prop({ type: TokenInfo })
    tokenFunding: TokenInfo;
}

export type CourseDraftDocument = HydratedDocument<CourseDraft>;
export const CourseDraftSchema = SchemaFactory.createForClass(CourseDraft);
