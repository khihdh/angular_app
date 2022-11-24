import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import productsData from '../products.json';

interface products {  
  id: Number;  
  name: String;  
  prix: String;  
  stock: String;  
  constructeur: String;
  Garentie: String;
} 


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: products[] = productsData;
  sample: products = this.products[0];
  constructor() { }

  ngOnInit(): void {
  }

  showTable: boolean = true;

  toggleShowTable(): void {
    this.showTable = !this.showTable;
}

changeSample(show : products) : void {
  this.sample=show;
}



}
