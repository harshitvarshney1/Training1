import { Component, OnInit } from '@angular/core';
import { Product } from '../product/iProduct';
import { SenddataService } from '../senddata.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  

  input1: number =0;
  product :Product;
  constructor(private senddata: SenddataService) { }
  ngOnInit(): void {
  }
sendData() {
  this.senddata.setPrice(this.input1);
}
}
