import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Admin } from './interfaces/admin.interface';
import { CreateAdminDto } from './dto/create-admin.dto';

@Injectable()
export class AdminService {
  // 注意 @InjectModel('admin')  ，这里的 admin 要与admin.module里的name一致
  constructor(
    @InjectModel('admin') private readonly adminModel: Model<Admin>
  ) {}
  //创建
  async create(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    const createdCat = new this.adminModel(createAdminDto);
    return await createdCat.save();
  }
  //获取所有
  async findAll(): Promise<Admin[]> {
    return await this.adminModel.find().exec();
  }
  async findOne(adminId: string): Promise<Admin> {
    return await this.adminModel.findById(adminId).exec();
  }
  async findOneByName(userName:string): Promise<Admin[]> {
    return await this.adminModel.find({'userName': userName}).exec();
  }
}
