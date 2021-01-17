import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavigationdetailPage } from './navigationdetail.page';

const routes: Routes = [
  {
    path: '',
    component: NavigationdetailPage
  }, {
    path: ':eventid',
    component: NavigationdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavigationdetailPageRoutingModule {}
