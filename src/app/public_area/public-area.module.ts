import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicAreaRoutingModule } from './public-area-routing.module';
import { PublicAreaLayoutModule } from './public_area_layout/public-area-layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicAreaRoutingModule,
    PublicAreaLayoutModule
  ]
})
export class PublicAreaModule { }
