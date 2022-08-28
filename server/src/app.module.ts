import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
// import { LoginController } from './modules/login/login.controller';
import { AppService } from './app.service';
import { MongooseModuleRoot } from './dataBase/mongo'
import { RedisInstallModule } from './dataBase/redis'

import { UsersModule } from './modules/users/users.module';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { ArticlesModule } from './modules/article/articles.module';
import { CacheModule } from './modules/redis/redisCach.module';
import { CacheService } from './modules/redis/redisCache.service';


@Module({
  imports: [MongooseModuleRoot, RedisInstallModule, UsersModule, AdminModule, AuthModule, ArticlesModule, CacheModule],
  controllers: [AppController],
  providers: [AppService, CacheService],
})
export class AppModule {}
