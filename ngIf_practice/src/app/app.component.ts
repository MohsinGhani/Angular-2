import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
    products: Product[];
    constructor(){
      this.products = [
        new Product(
          'NICEHAT', // sku
          'A Nice Black Hat', // name
          '/resources/images/products/black-hat.jpg', // imageUrl
          ['Men', 'Accessories', 'Hats'], // department
          29.99
        ),

        new Product(
          'NEATOJACKET', // sku
          'Blue Jacket', // name
          '/resources/images/products/blue-jacket.jpg', // imageUrl
          ['Women', 'Apparel', 'Jackets & Vests'], // department
          238.99
        ),

        new Product(
          'MYSHOES', // sku
          'Black Running Shoes', // name
          '/resources/images/products/black-shoes.jpg', // imageUrl
          ['Men', 'Shoes', 'Running Shoes'], // department
          109.99
        )
      ];
    }
    productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
    }
  }
    
}
export class Product{
    constructor(
      public sku:string,
      public name:string,
      public imgUrl:string,
      public department:string[],
      public price:number
    ){}
}




