import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filter/http-exception.filter'
import { TransformInterceptor } from './core/interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('blog'); // 设置全局路由前缀 
  // 注册全局错误的过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor())
    
  await app.listen(3000);
}
bootstrap();
