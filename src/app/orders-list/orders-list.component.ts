import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ordersData from '../orders.json';

interface orders {  
  id: Number;  
  numberOfItems: Number;  
  contents: String[];    
} 

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  orders: orders[] = ordersData;
  sample: orders = this.orders[0];
  constructor() { }

  ngOnInit(): void {
  }

  showTable: boolean = true;

  toggleShowTable(): void {
    this.showTable = !this.showTable;
}

changeSample(show : orders) : void {
  this.sample=show;
}

}
