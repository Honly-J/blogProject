import { BadRequestException, Injectable } from '@nestjs/common';
import { AdminService } from '../admin/admin.service';
import { JwtService } from '@nestjs/jwt';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import * as _ from 'lodash';
 
// import { encryptPassword } from 'src/core/utils/cryptogram.util';

interface SanitizedUser {
  id: string;
  userName: string;
  role: string;
  token: string;
  expires: string
}


@Injectable()
export class AuthService {

  constructor(
    private adminService:AdminService,
    private jwtService: JwtService
  ) {}

  // 验证用户有效性，这个在local策略里用到
  async validateUser(loginUserDto: CreateAdminDto): Promise<SanitizedUser> {
    const username = loginUserDto.userName;
    const password = loginUserDto.password;
    if (_.isEmpty(username) || _.isEmpty(password)) {
        throw new BadRequestException('user is required!');
    }
    // 去数据库查找该user
    const user = await this.adminService.findOneByName(username);
    if (_.isEmpty(user)) {
        throw new BadRequestException('user not found!');
    }
    const isValidPwd = password === user[0].password
    if (!isValidPwd) {
        throw new BadRequestException('password is not valid!');
    }
    const sanitizedUser: SanitizedUser = {
        id: user[0]._id,
        userName: user[0].userName,
        role: user[0].role,
        ...this.createToken({
          userName: user[0].userName,
          password: user[0].userName
        })
    };
    return sanitizedUser;
  }

  createToken({ userName }: CreateAdminDto) {
      const token = this.jwtService.sign({ userName });
      const expires = process.env.expiresTime;
      return {
          token,
          expires,
      }
  }
}
