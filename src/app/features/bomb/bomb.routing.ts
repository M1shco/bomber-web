import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BombContainerComponent } from './components/bomb-container/bomb-container.component';

const routes: Routes = [
  {
    path: '',
    component: BombContainerComponent,
    canActivate: [],
  },
 /*  {
    path: 'create',
    component: CreateFinancialProductContainerComponent,
    canActivate: [],
  },
  {
    path: ':id/update',
    component: UpdateFinancialProjectContainerComponent,
    canActivate: [],
  }, */
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule],
})
export class BombRoutingModule{}