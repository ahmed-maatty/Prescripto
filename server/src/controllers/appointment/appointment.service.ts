import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Appointments } from 'src/models/appointments.model';
import { Repository } from 'typeorm';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointments)
    private Appointment: Repository<Appointments>
  ) { }

  async createAppointmentLogic(doctorId: number, req: Request, data: { date: string }) {
    const { date } = data;
    const { id: userId } = (req as Request & { user: { id: string, role: string, email: string } }).user;
    const appointment = await this.Appointment.save({
      date: new Date(date),
      patient: { id: Number(userId) },
      doctor: { id: doctorId }
    });
    return appointment
  }

  async getAllAppointmentsLogic() {
    const appointments = await this.Appointment.find({
      relations: {
        doctor: {
          user: true
        },
        patient: true
      }
    });
    return appointments
  }

  async deleteAppointmentLogic(id : number){
    await this.Appointment.delete(id);
    return {message : "Appointment Has Been Deleted."}
  }
}
