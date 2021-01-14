import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZahlenPageRoutingModule } from './zahlen-routing.module';

import { ZahlenPage } from './zahlen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZahlenPageRoutingModule
  ],
  declarations: [ZahlenPage]
})
export class ZahlenPageModule {}
