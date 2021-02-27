import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';

@NgModule({
  declarations: [
    SlideshowComponent
  ],
  imports: [ RouterModule ],
  exports:[
    SlideshowComponent
  ]
})
export class CommonModule { }
