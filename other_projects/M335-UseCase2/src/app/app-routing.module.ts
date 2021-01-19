import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// TODO: Standardverhalten definieren
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToRoot = () => redirectLoggedInTo(['']);

// TODO: Routes inkl. AuthGuard oder AngularFireAuthGuard definieren
const routes: Routes = [
  {
    path: "",
    redirectTo: "gallerie",
    pathMatch: "full"
  },
  {
    path: "willkommen",
    loadChildren: () => import("./willkommen/willkommen.module").then(m => m.WillkommenPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToRoot }
  }, 
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToRoot }
  },
  {
    path: "registrierung",
    loadChildren: () => import("./registrierung/registrierung.module").then(m => m.RegistrierungPageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToRoot }
  },
  {
    path: "gallerie",
    loadChildren: () => import("./gallerie/gallerie.module").then(m => m.GalleriePageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  },
  {
    path: "ferienorte",
    loadChildren: () => import("./ferienorte/ferienorte.module").then(m => m.FerienortePageModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
