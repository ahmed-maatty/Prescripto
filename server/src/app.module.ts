import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm"
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './models/user.model';
import { Doctor } from './models/doctor.model';
import { Appointments } from './models/appointments.model';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './controllers/user/user.module';
import { AppointmentModule } from './controllers/appointment/appointment.module';
import { DoctorModule } from './controllers/doctor/doctor.module';
import { LoggerMI } from './middlewares/verifyToken';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: "localhost",
        username: config.get<string>("DB_USERNAME"),
        password: config.get<string>("DB_PASSWORD"),
        port: 5432,
        database: "appoinments",
        synchronize: true,
        entities: [User, Doctor, Appointments]
      })
    }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get<string>("JWT_SECRET"),
        signOptions: {
          expiresIn: config.get<string>("EXPIRE_IN")
        }
      })
    }),
    UserModule,
    AppointmentModule,
    DoctorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMI)
      .exclude(
        { path: "user/register", method: RequestMethod.POST },
        { path: "user/login", method: RequestMethod.POST })
      .forRoutes('*')
  }
}
