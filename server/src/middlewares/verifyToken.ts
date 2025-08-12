import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class LoggerMI implements NestMiddleware {
  constructor(private jwt: JwtService) { }
  use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.cookies?.token as string | undefined;
      if (!token) {
        throw new UnauthorizedException("Login First")
      }
      const decoded: { role: string, email: string, id: string } = this.jwt.verify(token, { secret: process.env.JWT_SECRET });
      (req as Request & { user?: { role?: string, id?: string, email: string } }).user = decoded;
      next()
    } catch (err) {
      console.log(err)
      throw new UnauthorizedException("Invalid or expired token, Please Login");
    }
  }
}