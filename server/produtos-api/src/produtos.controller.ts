import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from './poduto.model';
import { ProductService } from './produtos.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  @HttpCode(200)
  getAll(): Product[] {
    return this.productService.getAll();
  }

  @Get(':id')
  @HttpCode(200)
  getById(@Param() params): Product {
    return this.productService.getById(params.id);
  }

  @Post()
  @HttpCode(201)
  create(@Body() product: Product) {
    return this.productService.create(product);
  }

  @Put()
  @HttpCode(200)
  update(@Body() product: Product): Product {
    return this.productService.update(product);
  }

  @Delete(':id')
  @HttpCode(200)
  delete(@Param() params) {
    return this.productService.delete(params.id);
  }
}
