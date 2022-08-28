
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';

import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AdminModule } from '../admin/admin.module';
import { AuthController } from './auth.controller';

import { jwtSalt } from './constants';


@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: jwtSalt,  // 设置私钥
            signOptions: { expiresIn: '24h' }, // 过期时间
        }),
        AdminModule
    ],
    controllers: [AuthController],
    // 注入策略模块
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule {}
