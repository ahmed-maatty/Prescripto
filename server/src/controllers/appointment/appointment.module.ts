import { Module } from '@nestjs/common';
import { AppointmentController } from './appointment.controller';
import { AppointmentService } from './appointment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointments } from 'src/models/appointments.model';
import { User } from 'src/models/user.model';
import { Doctor } from 'src/models/doctor.model';

@Module({
  controllers: [AppointmentController],
  providers: [AppointmentService],
  imports :[ TypeOrmModule.forFeature([Appointments , User , Doctor])]
})
export class AppointmentModule {}
