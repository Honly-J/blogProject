import { Controller, Post, Body, Get, Param, UseGuards, Query } from '@nestjs/common';

import { ArticlesService } from './articles.service';

import { CreateArticleDto } from './dto/create-article.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CacheService } from '../redis/redisCache.service';


@UseGuards(JwtAuthGuard)
@Controller('article')
export class ArticlesController {
  constructor(
    private readonly articleService: ArticlesService,
    private readonly cache: CacheService
  ) {}
  
  @Get('/list')
  async list(@Query() query) {
    const CACHE_ATICLE_LIST = JSON.stringify(query)
    const cacheList = this.cache.get(CACHE_ATICLE_LIST)
    const cacheRes = await cacheList
    if (cacheRes) {
      console.log(CACHE_ATICLE_LIST + ' from redis cache')
      return cacheRes
    } else {
      console.log(CACHE_ATICLE_LIST + ' from db')
      const res = await this.articleService.findAll(query);
      this.cache.set(CACHE_ATICLE_LIST, res, 20)
      return res
    }
     
  }

  @Get('getOne')
  async getOne(@Query('id') id: string){
    const res = await this.articleService.findOne(id);
    return res
  }

  @Get('/remove')
  async removeOne(@Param('articleId') articleId: string){
    const re = await this.articleService.removeOne(articleId);
    return !!re
  }

  @Post('create')
  create(@Body() createArticleDto: CreateArticleDto) {
    createArticleDto.createTime = new Date().toLocaleString()
    createArticleDto.updateTime = new Date().toLocaleString()
    return this.articleService.create(createArticleDto);
  }
  @Post('update')
  update(@Query('id') id: string, @Body() createArticleDto: CreateArticleDto) {
    createArticleDto.updateTime = new Date().toLocaleString()
    return this.articleService.update(id, createArticleDto);
  }
}