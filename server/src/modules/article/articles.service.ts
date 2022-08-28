import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from './interfaces/article.interface';
import { Model } from 'mongoose';

import { CreateArticleDto } from './dto/create-article.dto';
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectID
 
@Injectable()
export class ArticlesService {
  constructor(@InjectModel('Article') private readonly articleModel: Model<Article>) {
    
  }
  //创建
  async create(@Body() createArticleDto: CreateArticleDto): Promise<Article> {
    const createdCat = new this.articleModel(createArticleDto);
    return await createdCat.save();
  }
  //更新
  async update(id, createArticleDto): Promise<Article> {
    const _id = mongodb.ObjectID(id)
    return await this.articleModel.findByIdAndUpdate(_id, createArticleDto).exec();
  }
  //获取所有
  async findAll(query): Promise<{count: number, dataList: Article[]}> {
    const { title,  author, status, pageSize, pageNo } = query
    const conditions = {
      title: {$regex: new RegExp(title)},
      author: {$regex: new RegExp(author)},
      status: {$regex: new RegExp(status)}
    }
    const count = await this.articleModel.count(conditions)
    const dataList = await this.articleModel.find(conditions).skip(((+pageNo) - 1) * (+pageSize)).limit(+pageSize).exec();
    return {
      count,
      dataList
    }
  }
  //获取所有
  async findOne(articleId: string): Promise<Article> {
    return await this.articleModel.findById(articleId).exec();
  }

  //删除单条
  async removeOne(articleId: string): Promise<Article> {
    const _id = mongodb.ObjectID(articleId)
    return await this.articleModel.findOneAndRemove(_id).exec();
  }
}