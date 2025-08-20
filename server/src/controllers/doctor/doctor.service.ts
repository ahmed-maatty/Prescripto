import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from 'src/models/doctor.model';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CreateDoctorDto } from './dtos/doctor.dto';
import { Role } from '../user/dtos/userdto';
import { User } from 'src/models/user.model';
import hashPassword from 'src/utils/hashPassword';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private Doctor: Repository<Doctor>,
    @InjectRepository(User)
    private User: Repository<User>
  ) { }

  /*
    * Method Create Doctor
    * Access Only Admin
  */
  async createDoctorLogic(doctorInfo: CreateDoctorDto) {
    const {
      username,
      email,
      password,
      phone,
      birthdate,
      gender,
      about,
      experience,
      fees,
      education,
      specialist
    } = doctorInfo;

    const hashedPass = await hashPassword(password)
    
    const user = this.User.create({
      username,
      email,
      password: hashedPass,
      phone,
      birthdate,
      gender,
      role: Role.Doctor
    });
    await this.User.save(user);

    const doctor = this.Doctor.create({
      about,
      experience,
      fees,
      education,
      specialist,
      user
    });
    await this.Doctor.save(doctor);

    return await this.Doctor.findOne({
      where: { id: doctor.id },
      relations: ['user']
    });
  }

  /*
    * Method Get ALl Doctors
    * Access EveryOne
  */
  async getAllDoctorLogic() {
    return this.Doctor.find({ relations: ['user'] })
  }

  /*
    * Method Get Specific Doctors
    * Access EveryOne
  */
  async getSpecificDoctorLogic(name?: string, specialist?: string) {
    const query: FindOptionsWhere<Doctor> = {};
    if (name) {
      query.user = { username: ILike(`${name}`) } as FindOptionsWhere<User>;
    }
    if (specialist) {
      query.specialist = ILike(`${specialist}`);
    }
    return this.Doctor.find({ where: query, relations: ['user'] });
  }

  /*
    * Method Edite Doctor
    * Access Admin For Role
    * Access Admin And Doctor For Info
  */
  async editDoctorInfoLogic(id: number, Info) {
    await this.Doctor.update(id, Info);
    return { message: "Doctor Updated Successfully." }
  }
  /*
    * Method Delete Doctor
    * Access Admin For Role
  */
  async deleteDoctorLogic(id: number) {
    await this.Doctor.delete(id);
    return { message: "Doctor Deleted Successfully." }
  }
};
