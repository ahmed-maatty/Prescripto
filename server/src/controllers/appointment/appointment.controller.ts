import { Body, Controller, Param, ParseIntPipe, Post, Req, Get, Delete } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { Request } from 'express';

@Controller('appointment')
export class AppointmentController {
  constructor(private appointmentServices: AppointmentService) {

  }

  @Post(":docorId")
  async createAppointment(@Param("docorId" , ParseIntPipe) doctorId : number , @Req() req : Request ,@Body() data : {date : string}){
    return this.appointmentServices.createAppointmentLogic(doctorId , req , data );
  }

  @Get()
  async getAllAppointment(){
    return this.appointmentServices.getAllAppointmentsLogic()
  }

  @Delete(":id")
  async deleteAppointment(@Param("id" , ParseIntPipe) id : number){
    return this.appointmentServices.deleteAppointmentLogic(id)
  }
}
