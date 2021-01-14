import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjektePageRoutingModule } from './objekte-routing.module';

import { ObjektePage } from './objekte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjektePageRoutingModule
  ],
  declarations: [ObjektePage]
})
export class ObjektePageModule {}
