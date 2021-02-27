import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlideshowComponent } from './work_space_common/slideshow/slideshow.component';


const routes: Routes = [
  {
    path: 'test',
    component: SlideshowComponent,
  },
  {
    path: 'content',
    loadChildren: () => import('./work_space_pages/content/content.module').then(x => x.ContentModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkSpaceRoutingModule { }
