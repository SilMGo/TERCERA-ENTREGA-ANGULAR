import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,  } from '@angular/router';
import { adminGuard } from '../../core/guards/admin.guard';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    
    RouterModule.forChild ([
      {
        path: '',
       children: [
            {
              path: 'home',
              loadChildren: () =>
              import ('./pages-dashboard/home/home.module').then (
                (m) => m.HomeModule),
            },

            {
              path: 'cursos-products',
              loadChildren: () =>
              import ('./pages-dashboard/cursos-products/cursos-products.module').then (
                (m) => m.CursosProductsModule),
            },

            {
              path: 'alumnos-users',
              canActivate: [adminGuard],
              loadChildren: () =>
              import ('./pages-dashboard/alumnos-users/alumnos-users.module').then (
                (m) => m.AlumnosUsersModule),
            },

            {
              path: '**',
              redirectTo: 'home,'
            }


       ]
      },
        
      
     
  ])
  ]   
  
  
  
  
})
export class DashboardRoutingModule { }
