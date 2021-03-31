import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binding';
  height = 200;
  width = 200;
  imgSource = '../assets/front.png';
  
  

    changeTshirtMouseEnter():void {
      this.imgSource = '../assets/back.png';
    }

    changeTshirtMouseExit():void {
      this.imgSource = '../assets/front.png';
    }
}
