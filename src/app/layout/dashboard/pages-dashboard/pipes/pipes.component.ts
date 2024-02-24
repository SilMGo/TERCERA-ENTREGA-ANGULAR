import { Component } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { timer } from 'rxjs';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss'
})
export class PipesComponent {
today = new Date(); 


}
