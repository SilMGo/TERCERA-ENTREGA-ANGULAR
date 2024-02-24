import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosProductsComponent } from './cursos-products.component';

const routes: Routes = [
  {  path: '',
     component: CursosProductsComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosProductsRoutingModule { }
