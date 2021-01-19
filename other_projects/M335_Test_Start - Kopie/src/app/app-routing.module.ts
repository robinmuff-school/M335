import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// TODO: Standardverhalten definieren


// TODO: routes mit Guard schützen
const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'willkommen',
    loadChildren: './willkommen/willkommen.module#WillkommenPageModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule'
  },
  {
    path: 'registrierung',
    loadChildren: './registrierung/registrierung.module#RegistrierungPageModule'
  },
  {
    path: 'news',
    loadChildren: './news/news.module#NewsPageModule'
  },
  {
    path: 'news-detail',
    loadChildren: './news-detail/news-detail.module#NewsDetailPageModule'
  },
  {
    path: 'chat',
    loadChildren: './chat/chat.module#ChatPageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
