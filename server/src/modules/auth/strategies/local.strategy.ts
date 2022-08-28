import { AuthService } from '../auth.service';
import { Strategy } from 'passport-local/lib';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super();
    }

    // 重写validate方法
    async validate(userName: string, password: string) {
        // 调用在服务层验证的方法
        // const user = await this.authService.validateUser({ userName, password });
        // if (!user) {
        //     throw new UnauthorizedException();
        // }
        // return user;
    }
}