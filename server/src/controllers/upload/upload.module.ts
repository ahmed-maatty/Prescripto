import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { Doctor } from 'src/models/doctor.model';

@Module({
  controllers: [UploadController],
  providers:[UploadService],
  imports:[TypeOrmModule.forFeature([User,Doctor])]
})
export class UploadModule {}
