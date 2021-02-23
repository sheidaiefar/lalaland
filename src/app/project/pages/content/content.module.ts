import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';
import { MusicComponent } from './music/music.component';
import { FilmComponent } from './film/film.component';
import { VideoComponent } from './video/video.component';
import { SerialComponent } from './serial/serial.component';


const routes: Routes = [
  {
    path: 'all',
    component: AllComponent
  },
  {
    path: 'music',
    component: MusicComponent
  },
  {
    path: 'video',
    component: VideoComponent,
  },
  {
    path: 'film',
    component: FilmComponent,
  },
  {
    path: 'serial',
    component: SerialComponent
  },
]
@NgModule({
  declarations: [
    HomeComponent,
    AllComponent,
    MusicComponent,
    FilmComponent,
    VideoComponent,
    SerialComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ContentModule { }
