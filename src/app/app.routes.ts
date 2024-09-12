import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'busqueda',
    loadComponent: () => import('./pages/busqueda/busqueda.page').then( m => m.BusquedaPage)
  },
  {
    path: 'guardado',
    loadComponent: () => import('./pages/guardado/guardado.page').then( m => m.GuardadoPage)
  },
  {
    path: 'acercade',
    loadComponent: () => import('./pages/acercade/acercade.page').then( m => m.AcercadePage)
  },
];
