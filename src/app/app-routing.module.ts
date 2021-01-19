import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

//import { LogoutComponent } from './logout/logout.page';
// Neue imports hinzufügen
import { AngularFireAuthGuard, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// Standartverhalten festlegen
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToRoot = () => redirectLoggedInTo(['']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'navigation',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'testpage',
    loadChildren: () => import('./testpage/testpage.module').then( m => m.TestpagePageModule)
  },
  {
    path: 'navigation',
    loadChildren: () => import('./navigation/navigation.module').then( m => m.NavigationPageModule),
  },
  {
    path: 'navigationdetail',
    loadChildren: () => import('./navigationdetail/navigationdetail.module').then( m => m.NavigationdetailPageModule)
  },
  {
    path: 'zahlen',
    loadChildren: () => import('./zahlen/zahlen.module').then( m => m.ZahlenPageModule)
  },
  {
    path: 'string',
    loadChildren: () => import('./string/string.module').then( m => m.StringPageModule)
  },
  {
    path: 'objekte',
    loadChildren: () => import('./objekte/objekte.module').then( m => m.ObjektePageModule)
  },
  {
    path: 'array',
    loadChildren: () => import('./array/array.module').then( m => m.ArrayPageModule)
  },
  {
    path: 'data-binding',
    loadChildren: () => import('./data-binding/data-binding.module').then( m => m.DataBindingPageModule)
  },
  {
    path: 'taschenrechner',
    loadChildren: () => import('./taschenrechner/taschenrechner.module').then( m => m.TaschenrechnerPageModule)
  },
  {
    path: 'navigationdetail',
    loadChildren: () => import('./navigationdetail/navigationdetail.module').then( m => m.NavigationdetailPageModule)
  },
  {
    path: 'alerts',
    loadChildren: () => import('./alerts/alerts.module').then( m => m.AlertsPageModule)
  },
  {
    path: 'newsletter',
    loadChildren: () => import('./newsletter/newsletter.module').then( m => m.NewsletterPageModule)
  },
  { path: "login", 
    loadChildren: "./login/login.module#LoginPageModule", 
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToRoot }
  },
  {
    path: "register",
    loadChildren: "./register/register.module#RegisterPageModule",
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToRoot }
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'speicher',
    loadChildren: () => import('./speicher/speicher.module').then( m => m.SpeicherPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
