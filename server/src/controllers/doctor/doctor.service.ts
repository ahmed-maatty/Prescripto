import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from 'src/models/doctor.model';
import { FindOptionsWhere, ILike, Repository } from 'typeorm';
import { CreateDoctorDto } from './dtos/doctor.dto';
import { Role } from '../user/dtos/userdto';
import { User } from 'src/models/user.model';

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

    const user = this.User.create({
      username,
      email,
      password,
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
  async editDoctorInfo() {

  }
  /*
    * Method Delete Doctor
    * Access Admin For Role
  */
  async deleteDoctorLogic() {

  }
};
