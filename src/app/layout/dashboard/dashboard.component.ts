import { Component } from '@angular/core';
//import { User } from './pages-dashboard/alumnos-users/alumnos-users.component';
import { AlumnosFormComponent } from './pages-dashboard/alumnos-users/components/alumnos-form/alumnos-form.component';
//import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../aunth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;

  constructor (
  
    private authservice:AuthService
    ){}

  logout(): void {
       this.authservice.logout();
  }

 // onEditarUser(user: User): void {}



 


}
