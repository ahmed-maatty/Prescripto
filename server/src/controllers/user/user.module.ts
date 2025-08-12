import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user.model';
import { Doctor } from 'src/models/doctor.model';
import { Appointments } from 'src/models/appointments.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [TypeOrmModule.forFeature([User, Doctor, Appointments]) , JwtModule],
  exports:[UserService]
})
export class UserModule { }
