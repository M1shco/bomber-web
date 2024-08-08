import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'bomb',
      loadChildren: () =>
        import('./features/bomb/bomb.module').then(
          (m) => m.BombModule
        ),
    },
    {
      path: '**',
      redirectTo: 'bomb',
      pathMatch: 'full',
    },
  ];
