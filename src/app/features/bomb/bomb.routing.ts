import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BombContainerComponent } from './components/bomb-container/bomb-container.component';
import { CreateBombComponent } from './components/create-bomb/create-bomb.component';
import { BombTableComponent } from './components/bomb-table/bomb-table.component';

const routes: Routes = [
  {
    path: '',
    component: BombContainerComponent,
    canActivate: [],
    children: [
      {
        path: 'table',
        component: BombTableComponent,
      },
      {
        path: 'create',
        component: CreateBombComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [CommonModule, RouterModule],
})
export class BombRoutingModule {}
