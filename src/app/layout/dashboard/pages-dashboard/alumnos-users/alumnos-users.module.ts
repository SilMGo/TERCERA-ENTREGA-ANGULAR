import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosUsersComponent } from './alumnos-users.component';
import { AlumnosFormComponent } from './components/alumnos-form/alumnos-form.component';

import {MatInputModule} from '@angular/material/input'; //usado x alumnos-form
import {MatSelectModule} from '@angular/material/select';  //usado x alumnos-form
import { SharedModule } from '../../../../shared/shared.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { AlumnosUsersRoutingModule } from './alumnos-users-routing.module';
import { AlumnosService } from './alumnos-users.service';



@NgModule({
  declarations: [
    AlumnosUsersComponent,
    AlumnosFormComponent,
   
  
     
    
    
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    SharedModule, //contiene lo de angular material
    MatTooltipModule,
    RouterModule, 
    AlumnosUsersRoutingModule,

    
    
  
    
  ],
  providers: [AlumnosService],
  exports: [AlumnosUsersComponent ]
})
export class AlumnosUsersModule { 

}