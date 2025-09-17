import { BadRequestException, Injectable } from "@nestjs/common";
import { v2 as cloudinary, UploadApiErrorResponse, UploadApiResponse } from "cloudinary";
import * as streamifier from "streamifier"

@Injectable()
export class UploadService {
  uploadImageToCloudinary(file: Express.Multer.File): Promise<UploadApiResponse | UploadApiErrorResponse> {
    if (!file || !file.buffer) { throw new BadRequestException("No file provided or file buffer is empty"); }
    return new Promise((resolve, reject) => {
      cloudinary.config({
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
      });
      const upload = cloudinary.uploader.upload_stream({ folder: "perspicto" }, (error, result) => {
        if (error) return reject(new Error(error.message));
        if (!result) return reject(new Error("No result returned from Cloudinary"))
        resolve(result);
      });
      streamifier.createReadStream(file.buffer).pipe(upload);
    })
  }
}