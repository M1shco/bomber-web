import { Component } from '@angular/core';
import { Bomb } from '../../interfaces/bomb.interface';

@Component({
  selector: 'app-bomb-table',

  templateUrl: './bomb-table.component.html',
  styleUrl: './bomb-table.component.scss',
})
export class BombTableComponent {

   bombs: Bomb []=[
  
    {
      id: '1',control:'manual', status:'encendido',lastStateChange:'2024/08/15 23:30'
    },
    {
      id: '2',control:'manual', status:'encendido',lastStateChange:'2024/08/15 23:30'
    },
    {
      id: '3',control:'manual', status:'encendido',lastStateChange:'2024/08/15 23:30'
    },
    {
      id: '4',control:'manual', status:'encendido',lastStateChange:'2024/08/15 23:30'
    },
    {
      id: '5',control:'manual', status:'encendido',lastStateChange:'2024/08/15 23:30'
    },
    {
      id: '6',control:'manual', status:'encendido',lastStateChange:'2024/08/15 23:30'
    },
    {
      id: '7',control:'manual', status:'encendido',lastStateChange:'2024/08/15 23:30'
    },
    {
      id: '8',control:'manual', status:'encendido',lastStateChange:'2024/08/15 23:30'
    },
    {
      id: '9',control:'manual', status:'encendido',lastStateChange:'2024/08/15 23:30'
    },
    {
      id: '10',control:'manual', status:'encendido',lastStateChange:'2024/08/15 23:30'
    }
  ] 
  
}
