import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './project/pages/content/home/home.component';
import { SignupComponent } from './project/pages/login/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch:'full'    
  },
  {
    path: 'signup',
    component: SignupComponent
    // loadChildren: () => import('./project/pages/login/login.module').then(x => x.LoginModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./project/pages/content/content.module').then(x => x.ContentModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
