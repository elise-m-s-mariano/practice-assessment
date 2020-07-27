import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dummy1Page } from './dummy1.page';

const routes: Routes = [
  {
    path: '',
    component: Dummy1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dummy1PageRoutingModule {}
