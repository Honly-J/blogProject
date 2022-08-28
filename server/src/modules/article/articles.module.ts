import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { ArticleScheme } from './articles.schema';
import { CacheService } from '../redis/redisCache.service';

@Module({
  controllers: [ArticlesController],
  imports: [
    MongooseModule.forFeature([{ name: 'Article', schema: ArticleScheme }])
  ],
  providers: [ArticlesService, CacheService],
})
export class ArticlesModule { }