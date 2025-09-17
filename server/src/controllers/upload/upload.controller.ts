import { Controller, UseInterceptors, Post, BadRequestException, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('upload-file')
export class UploadController {
  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: "./assets",
      filename(req, file, cb) {
        const prefix = `${Date.now()}-${Math.round(Math.random() * 1000000)}`
        const filename = `${prefix}-${file.originalname}`
        cb(null, filename)
      },

    }),
    fileFilter: (req, file, cb) => {
      if (file.mimetype.startsWith("image")) {
        cb(null, true);
      } else {
        cb(new BadRequestException("Un Supported File Format!"), false)
      }

    }
  }))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException("Not File Provided");
    console.log(file)
    return {message : "photo uploaded successfully"}
  }

}