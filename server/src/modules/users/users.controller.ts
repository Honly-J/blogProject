import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';

import { UsersService } from './users.service';

import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  
  @Get('getAll')
  async getAll() {
    return await this.userService.findAll();
  }

  @Get('userInfo/:userId')
  async getUserInfo2(@Param('userId') userId: string){
    return await this.userService.findOne(userId);
  }

  @Post('create')
  create(@Body() createUserDto: CreateUserDto) {
    console.log('CreateUserDto==>', createUserDto)
    this.userService.create(createUserDto);
  }
}