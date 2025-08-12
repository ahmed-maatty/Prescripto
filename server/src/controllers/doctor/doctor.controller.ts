import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { AdminGuard } from 'src/guards/admin.guard';
import { Request } from 'express';

@Controller('doctor')
export class DoctorController {
  constructor(private doctorServices: DoctorService) { }

  @Post('create-doctor')
  @UseGuards(AdminGuard)
  async createDoctor(@Body() doctorInfo: any) {
    return this.doctorServices.createDoctorLogic(doctorInfo);
  }
}
