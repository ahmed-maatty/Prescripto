import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Doctor } from "./doctor.model";
import { Appointments } from "./appointments.model";

enum Gender {
  Male = "Male",
  Female = "Female"
}

enum Role {
  Patient = "Patient",
  Doctor = "Doctor",
  Admin = "Admin"
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number
  @Column()
  username: string
  @Column({ unique: true, nullable: true })
  email: string
  @Column({ nullable: true })
  password: string
  @Column({ type: "enum", enum: Gender })
  gender: Gender
  @Column({ type: "enum", enum: Role, default: Role.Patient })
  role: Role
  @Column()
  phone: string
  @Column({ type: "json", default: { uri: "https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_1280.png", imageId: null } })
  photo: {
    uri: string,
    imageId: string | null
  }
  @Column()
  birthdate: Date
  @OneToOne(() => Doctor, doctor => doctor.user)
  doctor: Doctor
  @OneToMany(() => Appointments, appointment => appointment.patient)
  appoinments: Appointments[]
}