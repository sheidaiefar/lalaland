import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkSpaceModule } from './work-space/work-space.module';
import { AccessModule } from './access-area/access.module';
import { PublicAreaModule } from './public-area/public-area.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    WorkSpaceModule,
    AccessModule,
    PublicAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
