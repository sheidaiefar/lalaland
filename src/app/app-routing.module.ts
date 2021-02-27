import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessLayoutModule } from './access-area/access-area-layout/access-layout.module';
import { PublicLayoutComponent } from './public-area/public-area-layout/public-layout/public-layout.component';
import { PublicHomeComponent } from './public-area/public-area-pages/public-home/public-home.component';
import { WorkSpaceLayoutComponent } from './work-space/work-space-layout/work-space-layout/work-space-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: PublicHomeComponent
      }
    ],
    pathMatch: 'full'
  },
  {
    path: 'public',
    component: PublicLayoutComponent,
    loadChildren: () => import('./public-area/public-area.module').then(x => x.PublicAreaModule),

  },
  {
    path: 'access',
    component: AccessLayoutModule,
    loadChildren: () => import('./access-area/access.module').then(x => x.AccessModule),
  },
  {
    path: 'work-space',
    component: WorkSpaceLayoutComponent,
    loadChildren: () => import('./work-space/work-space.module').then(x => x.WorkSpaceModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
