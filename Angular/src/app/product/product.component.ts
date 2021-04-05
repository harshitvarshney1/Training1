import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
//import { iProduct} from './IProduct';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products : any[] = [];
  

  constructor(private dataservice : DataserviceService

  ) { }

  ngOnInit(): void {
    this.products = this.dataservice.getProducts();
  }
  

}
