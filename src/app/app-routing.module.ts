import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { FeatureoneComponent } from './components/featureone/featureone.component';
import { FeaturetwoComponent } from './components/featuretwo/featuretwo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '', pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'page1',
  //   component: FeatureoneComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'page2',
  //   component: FeaturetwoComponent,
  //   canActivate: [AuthGuard],
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
