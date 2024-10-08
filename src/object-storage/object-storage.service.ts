import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { BadRequestException, Injectable } from '@nestjs/common';
import { SHA256 } from 'crypto-js';
import { FileInformation } from 'src/entities/file-information.entity';

@Injectable()
export class ObjectStorageService {
    private readonly objectStorageClient: S3Client;
    private readonly bucketName: string;
    constructor() {
        this.objectStorageClient = new S3Client({
            credentials: {
                accessKeyId: process.env.OBJECT_STORAGE_ACCESS_KEY,
                secretAccessKey: process.env.OBJECT_STORAGE_SECRET_KEY,
            },
            endpoint: process.env.OBJECT_STORAGE_ENDPOINT,
            region: 'asia-southeast1',
        });
        this.bucketName = process.env.OBJECT_STORAGE_BUCKET_NAME;
    }

    async uploadFile(file: Express.Multer.File): Promise<FileInformation> {
        const fileInformation = new FileInformation();
        fileInformation.fileName = file.originalname;
        fileInformation.fileSize = file.size;
        const key =
            SHA256(Date.now().toString() + '-' + file.originalname).toString() +
            '.' +
            file.originalname.split('.').pop();
        const command = new PutObjectCommand({
            Body: file.buffer,
            Key: key,
            Bucket: this.bucketName,
        });
        const result = await this.objectStorageClient.send(command);
        if (result.$metadata.httpStatusCode == 200) {
            fileInformation.URL =
                process.env.OBJECT_STORAGE_ENDPOINT +
                this.bucketName +
                '/' +
                key;
            return fileInformation;
        } else {
            throw new BadRequestException();
        }
    }
}
