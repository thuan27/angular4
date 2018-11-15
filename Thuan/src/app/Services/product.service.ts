import { Product } from './../models/product.class';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public products: Product[] = [
    {
      id: 1,
      name: 'iphone X',
      price: 21000000,
      status: true
    },
    {
      id: 2,
      name: 'iphone 7',
      price: 10000000,
      status: false
    },
    {
      id: 3,
      name: 'iphone 8',
      price: 14000000,
      status: false
    },
    {
      id: 4,
      name: 'Samsung 8',
      price: 14000000,
      status: false
    }
  ];

  constructor() { }

  getAllproducts(name?: string, price?: number) {
    let result: Product[] = this.products;
    if (name) {
      result = this.products.filter(data => {
        console.log(data.name.toLowerCase().indexOf(name.toLowerCase()));
        return data.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
      });
    }
    if (price) {
      result = this.products.filter(data => {
        return data.price === price;
      });
    }
    console.log(result);
    return result;
  }

  getProductByID(id: number) {
    let result = null;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        result = this.products[i];
        break;
      }
    }
    return result;
  }
}
