/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/models/user.model';
import { Repository } from 'typeorm';
import { InjectRepository } from "@nestjs/typeorm"
import { CreateUserDto, EditDto, LoginDto } from './dtos/userdto';
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { Response, Request } from 'express';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private User: Repository<User>,
    private jwt: JwtService
  ) { }

  async createUserLogic(userInfo: CreateUserDto) {
    const { username, email, password, gender, birthdate, phone } = userInfo;
    const isEmailExit = await this.User.findOne({ where: { email } });
    if (isEmailExit) {
      throw new UnauthorizedException("This Email Is Already Used");
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPass = await bcrypt.hash(password, salt);
    const user = await this.User.save({
      username,
      email,
      password: hashedPass,
      gender,
      phone,
      birthdate
    })
    return { user }
  }

  //Login Logic
  async loginLogic(userInfo: LoginDto, res: Response) {
    const { email, password } = userInfo;
    const user = await this.User.findOne({ where: { email } });
    if (!user) {
      throw new UnauthorizedException("Invalid Email Or Password");
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new UnauthorizedException("Invalid Email Or Password");
    }
    const payload = { role: user.role, email: user.email, id: user.id };
    const token = this.jwt.sign(payload, { secret: process.env.JWT_SECRET });
    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24,
      secure: false,
      sameSite: "strict"
    })

    return res.status(200).json({ message: `Welcome, ${user.username}` , token})
  }

  // get all users
  async getAllUsersLogic() {
    const allUsers = await this.User.find();
    return allUsers;
  }

  // get all users
  async getSpecificUserLogic(id: number) {
    const user = await this.User.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException("User Not Found!")
    }
    return user;
  }

  // delete user Logic
  async deleteUserLogic(id: number) {
    await this.User.delete(id);
    return { message: "User Deleted Successfully!" };
  }

  // edit user logic
  async editeUserInfoLogic(req: Request, id: number, data: EditDto) {
    const { role, id: userId } = (req as Request & { user?: { role?: string; id?: number, email?: string } }).user || {};
    const user = await this.User.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException("User Not Found!")
    }
    if (role !== "Admin") {
      delete data.role;
    }
    if (role === "Admin" && userId !== id) {
      delete data.username;
      delete data.email;
      delete data.password;
      delete data.phone;
      delete data.birthdate;
    }
    if ((userId !== id && role !== "Admin") || Object.keys(data).length === 0) {
      throw new UnauthorizedException("You Have No Permission To Do This.")
    }
    await this.User.update(id, { ...data });
    return await this.User.findOne({ where: { id } });
  }
}
