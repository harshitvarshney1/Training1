import { Component, OnInit } from '@angular/core';
//import { iProduct} from './IProduct';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : any[] = [];
  

  constructor() { }

  ngOnInit(): void {
    this.products = this.getProducts();
  }
  getProducts() : any {
    return [
      {
        ID:1,
        Title :"Pen",
        Price : 45,
        ExpiryDate: "09-02-2021",
        isInstock : true,
        Quantity:32
      },
      {
        ID:2,
        Title :"Pencil",
        Price : 56,
        ExpiryDate: "10-10-2021",
        isInstock : false,
        Quantity:40
      },
      {
        ID:3,
        Title :"Screw Driver",
        Price : 267,
        ExpiryDate: "09-02-2020",
        isInstock : false,
        Quantity:900
        },
      {
        ID:4,
        Title :"Paint Brush",
        Price : 245,
        ExpiryDate: "12-10-2020",
        isInstock : true,
        Quantity:78870
        },
        {
          ID:5,
          Title :"Eraser",
          Price : 24,
          ExpiryDate: "02-10-2020",
          isInstock : false,
          Quantity:9990
          },
         ]
  }

}
