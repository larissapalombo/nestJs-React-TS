import { Injectable } from '@nestjs/common';
import { Product } from './poduto.model';

@Injectable()
export class ProductService {
  products: Product[] = [
    new Product(1, 'LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Product(1, 'LIV02', 'Livro Iniciando com Flutter', 39.9),
    new Product(3, 'LIV03', 'Inteligência artificial como serviço', 29.9),
  ];

  getAll(): Product[] {
    return this.products;
  }

  getById(id: number): Product {
    return this.products[0];
  }

  create(product: Product) {
    this.products.push(product);
  }

  update(product: Product): Product {
    return product;
  }

  delete(id: number) {
    this.products.pop();
  }
}
