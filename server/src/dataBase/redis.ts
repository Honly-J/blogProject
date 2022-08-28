import { Module } from '@nestjs/common';
import { RedisModule } from 'nestjs-redis';
import redisConf from 'src/config/redis.conf';

@Module({
  imports: [
    RedisModule.register(redisConf)
  ],
})
export class RedisInstallModule {}
