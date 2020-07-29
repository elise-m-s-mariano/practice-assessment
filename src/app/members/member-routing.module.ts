import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'dummy1',
    loadChildren: () => import('./dummy1/dummy1.module').then(m => m.Dummy1PageModule)
  },
  {
    path: 'dummy2',
    loadChildren: () => import('./dummy2/dummy2.module').then(m => m.Dummy2PageModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
