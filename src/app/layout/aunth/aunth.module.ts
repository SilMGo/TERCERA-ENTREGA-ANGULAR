import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoguinAunthComponent } from './loguin-aunth/loguin-aunth.component';
import { RouterModule } from '@angular/router';
import { AunthRoutingModule } from './aunth-routing.module';
import { SharedModule } from '../../shared/shared.module'; // contiene lo de Angular Material



@NgModule({
  declarations: [
    LoguinAunthComponent
  ],
  imports: [
    CommonModule, AunthRoutingModule, SharedModule
    ],
  exports: [
    LoguinAunthComponent,
  ]
})
export class AunthModule { }
