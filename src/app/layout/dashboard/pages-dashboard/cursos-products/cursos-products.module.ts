
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CursosProductsRoutingModule } from './cursos-products-routing.module';
import { CursosProductsComponent } from './cursos-products.component';
import { SharedModule } from '../../../../shared/shared.module';
import {MatTableModule} from '@angular/material/table'; //no hace falta porque esta en SharedModule
import { Component } from '@angular/core';
import { CursosService } from './cursos.service';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import {MatIconModule} from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';

@NgModule ({
  declarations: [
    CursosProductsComponent,
    ProductDialogComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule, // contiene todos los imports de angular material
    CursosProductsRoutingModule,
    
    
  ],
  providers: [CursosService, DatePipe],
  exports: [CursosProductsComponent]
})
export class CursosProductsModule { 
 
 
  

}
