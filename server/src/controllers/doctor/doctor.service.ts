import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Doctor } from 'src/models/doctor.model';
import { Repository } from 'typeorm';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private Doctor: Repository<Doctor>
  ) { }

  /*
    * Method Create Doctor
    * Access Only Admin
  */
  async createDoctorLogic() {

  }

  /*
    * Method Get ALl Doctors
    * Access EveryOne
  */
  async getAllDoctorLogic() {

  }

  /*
    * Method Get Specific Doctors
    * Access EveryOne
  */
  async getSpecificDoctorLogic() {

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
