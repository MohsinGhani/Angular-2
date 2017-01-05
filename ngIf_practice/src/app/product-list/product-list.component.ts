import { Component, OnInit,EventEmitter  } from '@angular/core';
import {Product} from '../app.component.ts';

@Component({
  selector: 'app-product-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  productList: Product[];
  onProductSelected: EventEmitter<Product>;
  currentProduct: Product;
  constructor() {
    this.onProductSelected = new EventEmitter();
  }
  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }
  ngOnInit() {
  }

}
