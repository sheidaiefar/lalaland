import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccessLayoutModule } from './access-area-layout/access-layout.module';
import { AccessRoutingModule } from './access-routing.module';
import { SignupComponent } from './access-area-pages/signup/signup.component';
import { LoginComponent } from './access-area-pages/login/login.component';

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
