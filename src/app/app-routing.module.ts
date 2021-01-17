import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    loadChildren: () => import('./navigation/navigation.module').then( m => m.NavigationPageModule)
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
  },  {
    path: 'alerts',
    loadChildren: () => import('./alerts/alerts.module').then( m => m.AlertsPageModule)
  },
  {
    path: 'newsletter',
    loadChildren: () => import('./newsletter/newsletter.module').then( m => m.NewsletterPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
