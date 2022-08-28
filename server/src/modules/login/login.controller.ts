import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';


@Controller('login')
export class LoginController {
  constructor(private readonly adminService: AdminService) {}

  @Get('/login/:userId')
  async getAdminInfo2(@Param('userId') userId: string){
    return await this.adminService.findOne(userId);
  }
  @Get('/login')
  async getAdminInfo(){
    return await this.adminService.findAll();
  }

  @Post('/checkLogin')
  async create(@Body() createAdminDto: CreateAdminDto) {
    console.log('CreateAdminDto==>', createAdminDto)
    const { userName, password } = createAdminDto
    if (!userName || !password) return '缺少参数'
    const result = await this.adminService.findOneByName(createAdminDto.userName);
    console.log('ressss==>', result)
    if (result?.length === 0) return '没找到该用户信息'
    const dbData = result[0]
    if (userName === dbData.userName && dbData.password ===  password ) {
      return 'ok'
    } else {
      return '用户名或密码错误'
    }
  }
}