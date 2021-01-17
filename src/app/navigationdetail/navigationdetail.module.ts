import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavigationdetailPageRoutingModule } from './navigationdetail-routing.module';

import { NavigationdetailPage } from './navigationdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavigationdetailPageRoutingModule
  ],
  declarations: [NavigationdetailPage]
})
export class NavigationdetailPageModule {}
