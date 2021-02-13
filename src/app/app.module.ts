import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FavoriteStarComponent } from './project/common/rating/favorite-star/favorite-star.component';
import { LayoutModule } from './project/layout/layout.module';
@NgModule({
  declarations: [
    AppComponent,
    FavoriteStarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,    
    LayoutModule,
    AppRoutingModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
