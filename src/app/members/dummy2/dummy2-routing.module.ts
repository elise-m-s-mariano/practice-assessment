import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dummy2Page } from './dummy2.page';

const routes: Routes = [
  {
    path: '',
    component: Dummy2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dummy2PageRoutingModule {}
