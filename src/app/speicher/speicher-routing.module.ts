import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeicherPage } from './speicher.page';

const routes: Routes = [
  {
    path: '',
    component: SpeicherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeicherPageRoutingModule {}
