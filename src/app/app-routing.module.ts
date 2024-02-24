import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

import { NotFoundComponent } from './layout/not-found/not-found.component';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
   {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    component: DashboardComponent,
        loadChildren: () =>
      import('./layout/dashboard/dashboard.module').then(
        (m) => m.DashboardModule ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./layout/aunth/aunth.module').then(
        (m) => m.AunthModule),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
   {
    path: '**',
    redirectTo: '404',
  },
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}