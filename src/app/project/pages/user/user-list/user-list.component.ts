import { Component, OnInit } from '@angular/core';

export interface User {
  position: number;
  firstName: string;
  lastName: string;
  email: string;
  active: boolean;
}

const ELEMENT_DATA: User[] = [
  {position: 1, firstName: 'Hydrogen', lastName: 'Hydr', email: 'x@y.z', active: true},
  {position: 2, firstName: 'Helium',  lastName: 'Hydr',email: 'x@y.z', active: true},
  {position: 3, firstName: 'ccccc',  lastName: 'Hydr',email: 'x@y.z', active: false},
  {position: 4, firstName: 'Beryllium',  lastName: 'Hydr',email: 'x@y.z', active: true},
  {position: 5, firstName: 'Boron',  lastName: 'Hydr',email: 'x@y.z', active: false},

];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent  {

  constructor() { }

  
  displayedColumns: string[] = ['position','firstName', 'lastName', 'email', 'active'];
  dataSource = ELEMENT_DATA;

}
