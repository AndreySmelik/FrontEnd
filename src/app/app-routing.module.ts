import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: './pages/main-page/main-page.module#MainPageModule',
   // canActivate: [AuthGuard]
  },
  {
    path: 'second',
    loadChildren: './pages/second-page/second-page.module#SecondPageModule',
   // canActivate: [AuthGuard]
  },
  {
    path: 'third',
    loadChildren: './pages/third-page/third-page.module#ThirdPageModule',
   // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: './pages/login-page/login-page.module#LoginPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
