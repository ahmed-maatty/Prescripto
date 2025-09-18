import { Controller, UseInterceptors, Post, BadRequestException, UploadedFile, Req } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { UploadService } from './upload.service';
import { InjectRepository } from '@nestjs/typeorm'; 
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';
import { Request } from 'express';

@Controller('upload-file')
export class UploadController {
  constructor(
    @InjectRepository(User)
    private User : Repository<User>,
    private uploadService: UploadService
  ) { }
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

  async uploadFile(@UploadedFile() file: Express.Multer.File , @Req() req : Request) {
    const result = await this.uploadService.uploadImageToCloudinary(file);
    const {id} = (req as Request & {user: { id: string, role: string, email: string }}).user;
    await this.User.update(id , {
      photo:{
        uri : result.url
      }
    })
    return {message : "Profile Photo Updated"};
  }
}