import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoriteStarComponent } from './project/pages/rating/favorite-star/favorite-star.component';
import { UserModule } from './project/pages/user/user.module';
import { LayoutModule } from './project/pages/layout/layout.module';



@NgModule({
  declarations: [
    AppComponent,
    FavoriteStarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UserModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
