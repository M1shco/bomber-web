import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BombRoutingModule } from './bomb.routing';
import { BombContainerComponent } from './components/bomb-container/bomb-container.component';
import { BombTableComponent } from './components/bomb-table/bomb-table.component';
import { CreateBombComponent } from './components/create-bomb/create-bomb.component';

@NgModule({
  declarations: [
    BombContainerComponent,
    BombTableComponent,
    CreateBombComponent,
  ],
  imports: [CommonModule, BombRoutingModule],
})
export class BombModule {}
