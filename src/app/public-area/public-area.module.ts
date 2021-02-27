import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicAreaRoutingModule } from './public-area-routing.module';
import { PublicAreaLayoutModule } from './public-area-layout/public-area-layout.module';
import { PublicHomeComponent } from './public-area-pages/public-home/public-home.component';
import { PublicLayoutComponent } from './public-area-layout/public-layout/public-layout.component';

@NgModule({
  declarations: [PublicHomeComponent],
  imports: [
    CommonModule,
    PublicAreaRoutingModule,
    PublicAreaLayoutModule
  ],
  exports:[
    PublicLayoutComponent
  ]
})
export class PublicAreaModule { }
