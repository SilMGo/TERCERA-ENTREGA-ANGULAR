import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlumnosUsersComponent } from './alumnos-users.component';




@NgModule({
  declarations: [],
  imports: [ 
    CommonModule,
    RouterModule.forChild ([
        {
          path: '',
          component:AlumnosUsersComponent,
        },

      

    ])
        ],
  exports: [RouterModule]
})
export class AlumnosUsersRoutingModule { }
