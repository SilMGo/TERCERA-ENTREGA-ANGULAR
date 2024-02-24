import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Curso } from '../../models';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrl: './product-dialog.component.scss'
})
export class ProductDialogComponent {

  productForm: FormGroup;
  
  constructor (
    private fb:FormBuilder,
    private dialogref:MatDialogRef<ProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingProduct?:Curso,
    ) 
    {

    this.productForm = this.fb.group({
      name: this.fb.control (''),
      startDate:this.fb.control (''),
    });

      if (editingProduct) {
        this.productForm.patchValue(editingProduct)
      }
  }

   onSave(): void {
    this.dialogref.close (this.productForm.value)
   } 

}