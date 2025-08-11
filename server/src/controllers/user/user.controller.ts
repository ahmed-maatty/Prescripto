import { Body, Controller, Post, Res,Req , Get, Param, ParseIntPipe, Delete, Put, UseGuards } from '@nestjs/common';
import { UserService } from "./user.service"
import { CreateUserDto, EditDto, LoginDto } from './dtos/userdto';
import { Response ,Request} from 'express';
import { AuthorizationGuard } from 'src/guards/authorization.gard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post("register")
  createUser(@Body() userInfo : CreateUserDto ){
    return this.userService.createUserLogic(userInfo)
  }

  @Post("login")
  login(@Body() userInfo : LoginDto , @Res() res:Response ){
    return this.userService.loginLogic(userInfo , res)
  }

  @Get('all-users')
  allUsers(){
    return this.userService.getAllUsersLogic();
  }

  @Get(':id')
  SpecificUser(@Param('id' , ParseIntPipe ) id : number){
    return this.userService.getSpecificUserLogic(id);
  }

  @Delete(":id")
  DeleteUser(@Param('id' , ParseIntPipe) id : number){
    return this.userService.deleteUserLogic(id);
  }

  @Put(":id")
  @UseGuards(AuthorizationGuard)
  EditUserInfo(@Param('id' , ParseIntPipe) id :number , @Body() data :EditDto , @Req() req : Request){
    return this.userService.editeUserInfoLogic(req , id , data)
  }
}