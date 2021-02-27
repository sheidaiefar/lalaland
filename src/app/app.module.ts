import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkSpaceModule } from './work_space/work-space.module';
import { AccessModule } from './access_area/access.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WorkSpaceModule,
    AccessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
