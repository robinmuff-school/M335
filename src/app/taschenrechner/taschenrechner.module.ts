import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaschenrechnerPageRoutingModule } from './taschenrechner-routing.module';

import { TaschenrechnerPage } from './taschenrechner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaschenrechnerPageRoutingModule
  ],
  declarations: [TaschenrechnerPage]
})
export class TaschenrechnerPageModule {}
