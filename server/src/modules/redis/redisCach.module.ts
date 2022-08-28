 
import { Module } from '@nestjs/common';
import { CacheService } from './redisCache.service';

@Module({
    imports: [CacheService],
    controllers: [],
    // 注入策略模块
    providers: [],
    exports: [CacheService],
})
export class CacheModule {}
