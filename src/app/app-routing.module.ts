import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './work_space/work_space_pages/content/home-page/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  // {
  //   path: 'test',
  //     component: SlideshowComponent,
  // },
  // {
  //   path: 'content',
  // loadChildren: () => import('').then(x => x.ContentModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
