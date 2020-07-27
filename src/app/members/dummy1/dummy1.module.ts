import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dummy1PageRoutingModule } from './dummy1-routing.module';

import { Dummy1Page } from './dummy1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dummy1PageRoutingModule
  ],
  declarations: [Dummy1Page]
})
export class Dummy1PageModule {}
