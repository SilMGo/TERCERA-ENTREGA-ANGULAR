import { Component,  } from '@angular/core';
import { UsersService } from '../../../../core/services/users.service';
import { NgModule } from '@angular/core'
import { AlertService } from '../../../../core/services/alerts.service';
import { Router } from '@angular/router';
import { AlumnosService } from './alumnos-users.service';
import { Alumno } from './models';

import { MatDialog } from '@angular/material/dialog';
import { AlumnosFormComponent } from './components/alumnos-form/alumnos-form.component';


@Component({
  selector: 'app-alumnos-users',
  templateUrl: './alumnos-users.component.html',
  styleUrl: './alumnos-users.component.scss'
})
export class AlumnosUsersComponent {
  displayedColumns = ['id','name', 'lastName', 'email', 'rol', 'actions'];

  alumnos: Alumno []= []

  constructor (
    private alumnosService : AlumnosService,
    public dialog: MatDialog
   ) {

    this.alumnosService.getAlumnos().subscribe ({
      next: (alumnos) => {
        this.alumnos=alumnos;
      }
    })
  }
  onCreate (): void {
    this.dialog
    .open(AlumnosFormComponent)
    .afterClosed()
    .subscribe ({
      next: (result) => {
        if (result) {
          this.alumnosService.createAlumnos(result).subscribe({
            next: (alumnos) => (this.alumnos =alumnos),
          })
        }
      }
    })
  }

  onEdit (alumno:Alumno){
    this.dialog.open (AlumnosFormComponent,{
      data: alumno,
    }).afterClosed()
      .subscribe({
       next: (result)=> {
        if (result){
          this.alumnosService.updateAlumnoById(alumno.id, result)
          .subscribe ({
            next: (alumnos) => (this.alumnos =alumnos),
          })
        }
       }})
  }



  onDelete(id:number) {
    if (confirm ('Vas a borrar un dato de la tabla. Estras seguro?')){
    this.alumnosService.deleteAlumnoById(id).subscribe ({
      next: (alumnos) => {
        this.alumnos= alumnos;
      }
    })
  }
 }
}
  

  