import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import {MatTableModule} from '@angular/material/table'; 


@NgModule({
  declarations: [UserListComponent, UserEditComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports:[UserListComponent, UserEditComponent]
})
export class UserModule { }
