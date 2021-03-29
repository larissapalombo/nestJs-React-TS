import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './produtos.controller';
import { ProductService } from './produtos.service';

@Module({
  imports: [],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
