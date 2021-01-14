import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjektePage } from './objekte.page';

const routes: Routes = [
  {
    path: '',
    component: ObjektePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjektePageRoutingModule {}
