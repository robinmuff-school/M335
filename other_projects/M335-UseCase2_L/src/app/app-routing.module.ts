import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogoutComponent } from './logout/logout.page';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
// Standardverhalten definieren
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToRoot = () => redirectLoggedInTo(['']);

// Routes mit Guard schützen
const routes: Routes = [
  {
    path: '',
    redirectTo: 'gallerie',
    pathMatch: 'full'
  },
  {
    path: 'ferienorte',
    loadChildren: './ferienorte/ferienorte.module#FerienortePageModule',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'gallerie',
    loadChildren: './gallerie/gallerie.module#GalleriePageModule',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginPageModule',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToRoot }
  },
  {
    path: 'registrierung',
    loadChildren: './registrierung/registrierung.module#RegistrierungPageModule',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToRoot }
  },
  {
    path: 'willkommen',
    loadChildren: './willkommen/willkommen.module#WillkommenPageModule',
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToRoot }
  },
  {
    path: 'logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
