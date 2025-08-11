import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Doctor } from "./doctor.model";
import { User } from "./user.model";

@Entity()
export class Appointments {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ nullable: true })
  date: Date
  @ManyToOne(() => User, user => user.appoinments)
  patient: User
  @ManyToOne(() => Doctor, doctor => doctor.appoinments)
  doctor: Doctor
}