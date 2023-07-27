import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'waiter',
    pathMatch: 'full',
  },
  {
    path: 'cooker',
    loadChildren: () =>
      import('./cooker/cooker.module').then((m) => m.CookerPageModule),
  },
  {
    path: 'waiter',
    loadChildren: () =>
      import('./waiter/waiter.module').then((m) => m.WaiterPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
