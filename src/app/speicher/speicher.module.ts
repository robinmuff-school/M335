import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpeicherPageRoutingModule } from './speicher-routing.module';

import { SpeicherPage } from './speicher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpeicherPageRoutingModule
  ],
  declarations: [SpeicherPage]
})
export class SpeicherPageModule {}
