import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';


@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('admin/:userId')
  async getAdminInfo2(@Param('userId') userId: string){
    return await this.adminService.findOne(userId);
  }

  @Post('create')
  create(@Body() createAdminDto: CreateAdminDto) {
    console.log('CreateAdminDto==>', createAdminDto)
    this.adminService.create(createAdminDto);
  }
}