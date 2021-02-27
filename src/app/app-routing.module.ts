import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicHomeComponent } from './public-area/public-area-pages/public-home/public-home.component';
import { HomeComponent } from './work-space/work-space-pages/content/home-page/home.component';


const routes: Routes = [
  {
    path: '',
    component: PublicHomeComponent ,
    pathMatch: 'full'
  },
  {
    path: 'public',
    loadChildren: () => import('./public-area/public-area.module').then(x => x.PublicAreaModule),
  },
  {
    path: 'access',
    loadChildren: () => import('./access-area/access.module').then(x => x.AccessModule),
  },
  {
    path: 'work-space',
    loadChildren: () => import('./work-space/work-space.module').then(x => x.WorkSpaceModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
