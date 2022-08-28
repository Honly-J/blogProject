import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AdminService } from './admin.service';
import { AdminScheme } from './admin.schema';
import { AdminController } from './admin.controller';
import { LoginController } from '../login/login.controller';

@Module({
  providers: [AdminService],
  controllers: [AdminController, LoginController],
  imports: [MongooseModule.forFeature(
    [{ name: 'admin', schema: AdminScheme }],
  )],
  // 这里必须导出去，其他模块才可以用
  exports: [AdminService]
})
export class AdminModule {}
