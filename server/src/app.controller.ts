import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { CacheService } from './modules/redis/redisCache.service';

const keyString = 'userName'
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly cache: CacheService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/getRedisCache')
  async getRedis() {
    const value = await this.cache.get(keyString);
    if (value) {
      return {
        data: value,
        loadsFrom: 'redis cache',
      };
    }
    await this.cache.set(keyString, 'ddddddddd', 60 * 1000);
    return {
      data: keyString,
      loadsFrom: 'fake database',
    };
  }
}
