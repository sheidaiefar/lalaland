import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './work-space-header/work-space-header.component';
import { WorkSpaceLayoutComponent } from './work-space-layout/work-space-layout.component';
import { WorkSpaceMenuComponent } from './work-space-menu/work-space-menu.component';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from '../work_space_common/material-components/material-components/material-components.module';


@NgModule({
  declarations: [
    HeaderComponent,
    WorkSpaceLayoutComponent,
    WorkSpaceMenuComponent
  ],
  exports: [WorkSpaceLayoutComponent],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    RouterModule,
  ]
})
export class WorkSpaceLayoutModule { }
