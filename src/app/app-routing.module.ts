import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './project/pages/content/content/content.component';
import { SignupComponent } from './project/pages/login/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'signup',
    component: SignupComponent
    // loadChildren: () => import('./project/pages/login/login.module').then(x => x.LoginModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
