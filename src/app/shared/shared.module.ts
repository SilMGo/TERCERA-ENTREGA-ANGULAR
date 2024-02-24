import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from './full-name.pipe';
import { ResaltadoDirective } from './resaltado.directive';
import { RepetirDirective } from './repetir.directive';



//de angular material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ValidationErrorsPipe } from './validation-errors.pipe';



@NgModule({
  declarations: [
    FullNamePipe,
    ResaltadoDirective,
    RepetirDirective,
    ValidationErrorsPipe // pipe q valida errores
  ],
  imports: [
    CommonModule,
    

  ],
  exports: [
    FullNamePipe,
    ResaltadoDirective,
     RepetirDirective,
     ValidationErrorsPipe,
 
     //de angular material 
     MatTableModule,
     MatIconModule,
     MatButtonModule,
     MatDialogModule,
     MatPaginatorModule,
     MatDatepickerModule,
     ReactiveFormsModule,
     MatInputModule,
     MatFormFieldModule,
     MatCardModule,
     
      
    
    ]
})
export class SharedModule { }
