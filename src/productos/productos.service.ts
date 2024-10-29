import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Product } from './entities/product.entity';
import {v4 as Uuidv4} from 'uuid'

@Injectable()
export class ProductosService {
  private products: Product[] = [];
  create(createProductDto: CreateProductDto) {
    const {name, description, price} = createProductDto;
    const newProduct = new Product(
      Uuidv4(),
      name,
      description,
      price,
    );
    this.products.push(newProduct);
    return newProduct;
  }

  findAll() {
    return this.products;
  }

  findOne(id: string):Product {
    const product = this.products.find(product => product.id == id);
    if (!product){
      throw new NotFoundException(`Product with id ${ id } not found`);
    }
    return product;
  }

  update(id: string, updateProductoDto: UpdateProductoDto) {
    const{id:_, name,description,price}= updateProductoDto;
    const product = this.findOne(id);
    product.updateWith({name,description,price});
    return product;
  }

  remove(id: string): Product {
    const product = this.findOne(id);
    this.products = this.products.filter(product => product.id != id);
    return product;
  }
}
