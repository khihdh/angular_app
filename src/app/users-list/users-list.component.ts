import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import usersData from '../users.json';

interface users {  
  id: Number;  
  name: String;  
  email: String;  
  gender: String;  
} 

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: users[] = usersData;
  sample: users = this.users[0];
  constructor() { }

  ngOnInit(): void {
  }

  showTable: boolean = true;

  toggleShowTable(): void {
    this.showTable = !this.showTable;
}

changeSample(show : users) : void {
  this.sample=show;
}

}
