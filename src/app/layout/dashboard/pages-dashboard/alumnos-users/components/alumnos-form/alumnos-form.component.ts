import { Component, EventEmitter, Inject, Output, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Alumno } from '../../models';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrl: './alumnos-form.component.scss'
})
export class AlumnosFormComponent {
 
  alumnoForm:FormGroup;

constructor(
  private fb: FormBuilder,
  private dialogref:MatDialogRef<AlumnosFormComponent>,
  @Inject (MAT_DIALOG_DATA) private editingAlumno?: Alumno,
  ) {
  this.alumnoForm = this.fb.group({
    name: this.fb.control('', Validators.required),
    lastName: this.fb.control('', Validators.required),
    email: this.fb.control('', Validators.required),
    rol: this.fb.control('', Validators.required),
  });

  if (editingAlumno) {
    this.alumnoForm.patchValue(editingAlumno);
  }
}


onSave(): void {
  this.dialogref.close(this.alumnoForm.value)
}

}