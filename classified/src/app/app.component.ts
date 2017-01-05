import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
  }

     title = 'Super Market';
     categories: Array<string> = ['Mobile', 'Cars', 'bikes','Car'];
     itemNames: Array<string> = ['Nokia', 'Corola', 'Honda','BMW'];
     contacts: Array<string> = ['03432195645', '03002564585', '03462195645','03089785645'];
     emails: Array<string> = ['mohsin@gmail.com', 'sharukh@hotmail.com', 'ali@yahoo.com','raza@yahoo.com'];
     prices: Array<number> = [6000, 200000, 12000, 800000];
     cartItems: Array<string> = [];
     cartPrices: Array<number> = [];
     totalPrice:number = 0;
     adminForm:boolean = true;
     addItem:boolean = false;
     showCartItem:boolean = false;
     showProducts:boolean = false;

  fullPath:Array<string> = ["./assets/images/one.jpg","./assets/images/two.jpg","./assets/images/three.jpg","./assets/images/four.jpg"];
  
  adminLogin(adminName,adminPass)
  {
      if(adminName == "mohsin" && adminPass == "admin")
      {
        this.adminForm = false;
        this.showProducts = true;
      }
      else{
        alert("Invalid user password");
      }
  }
  add(category,name,contact,email,price)
  {
    this.categories.push(category);
    this.itemNames.push(name);
    this.contacts.push(contact);
    this.emails.push(email);
    this.prices.push(price);
  }
  cart(i,item)
  {
    this.cartItems.push(item);
    this.cartPrices.push(this.prices[i]);
  }

  showCart()
  {
    this.showCartItem = true; 
    this.showProducts = false;
    this.addItem = false;
    for (let i of this.cartPrices) {
      this.totalPrice = this.totalPrice + i;
    }
  }

  hideCart(){
    this.showCartItem = false;
    this.showProducts = true;
    this.addItem = false;
  }

  addItemForm()
  {
    this.addItem = true;
    this.showProducts = false;
    this.showCartItem = false;
  }

  gotoHome()
  {
    this.addItem = false;
    this.showCartItem = false;
    this.showProducts = true;
  }
}

  