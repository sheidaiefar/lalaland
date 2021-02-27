import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkSpaceLayoutModule } from './work_space_layout/work-space-layout.module';
import { WorkSpaceRoutingModule } from './work-space-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WorkSpaceRoutingModule,
    WorkSpaceLayoutModule
  ],
  exports:[
    WorkSpaceLayoutModule
  ]
})
export class WorkSpaceModule { }
