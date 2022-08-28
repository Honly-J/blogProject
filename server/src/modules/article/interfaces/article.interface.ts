import { Document } from 'mongoose';
export interface Article extends Document {
  title: string
  sort: string
  imgs: string
  content: never
  author: string
  createTime: string
  updateTime: string
}