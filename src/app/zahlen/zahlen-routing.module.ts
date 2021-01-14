import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZahlenPage } from './zahlen.page';

const routes: Routes = [
  {
    path: '',
    component: ZahlenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZahlenPageRoutingModule {}
