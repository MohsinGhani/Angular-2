import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Super Market';
  items: Array<any> = ['Cap Rs.200', 'T-shirt Rs.999' , 'Pant Rs.1999'];
  newCard: Array<any> = [];
  margeItem: any;

  add(name, price)
  {
    this.margeItem = name + ' Rs.' + price;
    this.items.push(this.margeItem);
  }
  card(value)
  {
    this.newCard.push(value);
    // alert(value);
  }
}
