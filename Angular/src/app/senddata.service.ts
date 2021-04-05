import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Product} from './product/iProduct';
@Injectable({
  providedIn: 'root'
})
export class SenddataService {

  product = {
    Id : 1,
    Title : 'pen',
    Price : 100,
    ExpiryDate : '10-09-2002',
    isInStock : true,
    Quantity : 2
  };

  product$ : BehaviorSubject<Product>;
  constructor() { 
    this.product$ = new BehaviorSubject(this.product);
  }

  setPrice(price: number)
  {
    this.product.Price = price;
  }
}
