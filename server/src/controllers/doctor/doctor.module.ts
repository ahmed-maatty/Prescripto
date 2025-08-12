import { Module } from '@nestjs/common';
import { DoctorController } from './doctor.controller';
import { DoctorService } from './doctor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { Doctor } from 'src/models/doctor.model';
import { Appointments } from 'src/models/appointments.model';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [DoctorController],
  providers: [DoctorService],
  imports: [
    TypeOrmModule.forFeature([Doctor, User, Appointments]),
    UserModule
  ]
})
export class DoctorModule { }
