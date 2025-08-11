import { Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { JwtService } from "@nestjs/jwt";

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unused-vars */

@Injectable()
export class LoggerMI implements NestMiddleware {
  constructor(private jwt: JwtService) { }
  use(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.cookies?.token as string | undefined;
      if (!token) {
        throw new UnauthorizedException("Login First")
      }
      const decoded = this.jwt.verify(token, { secret: process.env.JWT_SECRET });
      (req as any).user = decoded;
      next()
    } catch (error) {
      throw new UnauthorizedException("Invalid or expired token, Please Login")
    }
  }
}