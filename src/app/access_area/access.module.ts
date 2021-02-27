import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessLayoutModule } from './access_area_layout/access-layout.module';
import { AccessRoutingModule } from './access-routing.module';
import { SignupComponent } from './access_area_pages/signup/signup.component';
import { LoginComponent } from './access_area_pages/login/login.component';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [
    CommonModule,
    AccessRoutingModule,
    AccessLayoutModule
  ],
  exports: [
    AccessLayoutModule
  ]
})
export class AccessModule { }
