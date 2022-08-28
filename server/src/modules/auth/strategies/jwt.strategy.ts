import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtSalt } from '../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtSalt
        });
    }

    async validate(payload: any) {
        // 这里会拿到模块解析token之后的用户信息（如果一切正常的话）
        console.log(`JWT验证 - Step 4: 被守卫调用`);
        const info = payload.info;
        return { info };
    }
}