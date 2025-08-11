import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.model";
import { Appointments } from "./appointments.model";


@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number
  @Column({ nullable: true })
  specialist: string
  @Column({ nullable: true })
  education: string
  @Column({ nullable: true })
  experience: string
  @Column({ nullable: true })
  fees: string
  @Column({ nullable: true })
  about: string
  @OneToOne(() => User, user => user.doctor)
  user: User
  @OneToMany(() => Appointments, appointment => appointment.doctor)
  appoinments: Appointments[]
}