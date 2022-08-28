import * as mongoose from 'mongoose';
//定义mongodb的数据模型
export const ArticleScheme = new mongoose.Schema({
  title: String,
  sort: String,
  imgs: String,
  content: String,
  author: String,
  createTime: String,
  updateTime: String,
}, {
  collection: 'articles', // 指定是哪个表 collection
  versionKey: false
});
