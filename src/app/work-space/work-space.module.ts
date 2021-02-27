import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkSpaceRoutingModule } from './work-space-routing.module';
import { WorkSpaceLayoutModule } from './work-space-layout/work-space-layout.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WorkSpaceRoutingModule,
    WorkSpaceLayoutModule
  ],
  exports: [
    WorkSpaceLayoutModule,
  ]
})
export class WorkSpaceModule { }
