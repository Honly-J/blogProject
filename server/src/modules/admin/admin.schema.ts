import * as mongoose from 'mongoose';
//定义mongodb的数据模型
export const AdminScheme = new mongoose.Schema({
  userName: String,
  password: String,
  role: String
}, {
  collection: 'admin', // 指定是哪个表 collection
  versionKey: false
});
