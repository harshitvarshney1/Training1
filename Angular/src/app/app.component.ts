import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data Binding';
  showDataBindingDemo = true;
  showDirectiveDemo = false;
  showPurchase = false;
  showdemo() : void
  {
    this.showDataBindingDemo = true;
    this.showDirectiveDemo = false;
    this.showPurchase = false;

  }

  showdirectivedemo(): void {
    this.showDataBindingDemo = false;
    this.showDirectiveDemo = true;
    this.showPurchase = false;
  }
  showpurchase() : void {
    this.showDataBindingDemo = false;
    this.showDirectiveDemo = false;
    this.showPurchase = true;
  }
}
