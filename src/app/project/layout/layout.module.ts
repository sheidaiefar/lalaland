import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { MenuComponent } from './menu/menu.component';
import { MaterialComponentsModule } from '../common/material-components/material-components/material-components.module';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    MenuComponent
  ],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    MaterialComponentsModule,
  ]
})
export class LayoutModule { }
