import { Body, Controller, Get, Post, Query, UseGuards, Put, Param, ParseIntPipe, Delete } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { AdminGuard } from 'src/guards/admin.guard';
import { Request } from 'express';
import { AuthorizationGuard } from 'src/guards/authorization.guard';

@Controller('doctor')
export class DoctorController {
  constructor(private doctorServices: DoctorService) { }

  @Post('create-doctor')
  @UseGuards(AdminGuard)
  async createDoctor(@Body() doctorInfo: any) {
    return this.doctorServices.createDoctorLogic(doctorInfo);
  }

  @Get('doctors')
  async getAllDoctor() {
    return this.doctorServices.getAllDoctorLogic()
  }

  @Get('specail')
  async getSpecificDoctor(@Query('name') name: string, @Query('specialist') specialist: string) {
    return this.doctorServices.getSpecificDoctorLogic(name, specialist)
  }

  @Put(':id')
  @UseGuards(AuthorizationGuard)
  async editDoctorDetails(@Body() Info, @Param('id', ParseIntPipe) id: number) {
    return this.doctorServices.editDoctorInfoLogic(id, Info);
  }

  @Delete(":id")
  @UseGuards(AuthorizationGuard)
  async deleteDoctor(@Param("id", ParseIntPipe) id: number) {
    return this.doctorServices.deleteDoctorLogic(id)
  }
}
