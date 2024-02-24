import { Component } from '@angular/core';
import { Curso } from './models';
import { CursosService } from './cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from './components/product-dialog/product-dialog.component';


@Component({
  selector: 'app-cursos-products',
  templateUrl: './cursos-products.component.html',
  styleUrl: './cursos-products.component.scss'
})
export class CursosProductsComponent {
  displayedColumns: string[] =['id', 'name','startDate', 'fechaFin',  'actions'];

  cursos: Curso[] =[]

  constructor(
    private cursosService: CursosService, 
    public dialog: MatDialog
   ) {

      this.cursosService.getCursos().subscribe({
      next: (cursos) => {
        this.cursos = cursos;
      }, 
    })
  }

  onCreate (): void {
    this.dialog
      .open(ProductDialogComponent)
      .afterClosed()
      .subscribe({ 
        next:(result)=> { 
          if (result) {
            this.cursosService.createProduct(result)
            .subscribe ({next: (cursos) =>(this.cursos=cursos)})
        }
  },
  });
  }

  onEdit (curso:Curso){
    this.dialog.open (ProductDialogComponent,{
      data: curso,
    }).afterClosed()
      .subscribe({
       next: (result)=> {
        if (result){
          this.cursosService.updateProducyById(curso.id, result)
          .subscribe ({
            next: (cursos) => (this.cursos =cursos),
          })
        }
       }})
  }

  onDelete(id:number){
    if (confirm('Vas a borrar un dato de la tabla. Estras seguro?')){
    this.cursosService.deleteCursoById(id).subscribe({
      next:(cursos) => {
         this.cursos = cursos;
       },
    
      })
    }
  }
}