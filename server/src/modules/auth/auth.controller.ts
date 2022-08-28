import { BadRequestException, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

import { Request } from 'express';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ){}
  // @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    try {
      return this.authService.validateUser(req.body);
    } catch (error) {
        throw new BadRequestException(error.message);
    }
  }

  // 查询个人信息
  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  profile(@Req() req: Request) {
      return req.body
  }

}
