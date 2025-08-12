import { CanActivate, ExecutionContext, ForbiddenException } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express";

export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();
    const { role } = (req as Request & { user?: { id: string, role: string, email: string } }).user || {};
    if (role === "Admin") {
      return true;
    }
    throw new ForbiddenException("Only Admin Can Do This.")
  }
}