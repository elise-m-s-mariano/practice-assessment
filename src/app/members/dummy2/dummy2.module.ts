import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dummy2PageRoutingModule } from './dummy2-routing.module';

import { Dummy2Page } from './dummy2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dummy2PageRoutingModule
  ],
  declarations: [Dummy2Page]
})
export class Dummy2PageModule { }
