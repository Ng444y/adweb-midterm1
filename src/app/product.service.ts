import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts() {
    return [
      { id: 201, name: 'Laptop', price: 1200 },
      { id: 202, name: 'Phone', price: 800 },
      { id: 203, name: 'Tablet', price: 500 },
      { id: 204, name: 'Smartwatch', price: 250 },
      { id: 205, name: 'Camera', price: 700 },
    ];
  }
}
