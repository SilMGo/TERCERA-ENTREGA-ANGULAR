import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PipesModule } from './pages-dashboard/pipes/pipes.module';
import { SharedModule } from '../../shared/shared.module';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { RouterModule } from '@angular/router';


 @NgModule({
  declarations: [
    DashboardComponent,
    
   //hola
    
   
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    PipesModule,
    SharedModule,
    MatListModule,
    DashboardRoutingModule,
    RouterModule

   
    
    
  ],
  exports: [DashboardComponent],
})
  
export class DashboardModule { 


  }
