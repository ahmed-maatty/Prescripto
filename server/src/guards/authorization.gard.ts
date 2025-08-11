/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class AuthorizationGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest();
    const { id: paramId } = req.params;
    const { role, id } = req.user;
    if (!role) {
      throw new ForbiddenException("Please, Login First.");
    }

    if (role === "Admin" || Number(id) === Number(paramId)) {
      return true;
    }

    throw new UnauthorizedException("You Have No Permission To Do This.");
  }
}