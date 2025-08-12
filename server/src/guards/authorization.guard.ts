import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { Request } from "express";

@Injectable()
export class AuthorizationGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req : Request = context.switchToHttp().getRequest();
    const { id: paramId } = req.params;
    const { role, id } = (req as Request & ({user? : {id? :string , email? :string , role? : string}})).user || {};
    if (!role) {
      throw new ForbiddenException("Please, Login First.");
    }

    if (role === "Admin" || Number(id) === Number(paramId)) {
      return true;
    }

    throw new UnauthorizedException("You Have No Permission To Do This.");
  }
}