import { Controller, UseInterceptors, Post, BadRequestException, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { UploadService } from './upload.service';

@Controller('upload-file')
export class UploadController {
  constructor(private uploadService:UploadService){}
  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: memoryStorage(),
    fileFilter: (req, file, cb) => {
      if (file.mimetype.startsWith("image")) {
        cb(null, true);
      } else {
        cb(new BadRequestException("Un Supported File Format!"), false)
      }

    }
  }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const result = await this.uploadService.uploadImageToCloudinary(file);
    return result
  }
}