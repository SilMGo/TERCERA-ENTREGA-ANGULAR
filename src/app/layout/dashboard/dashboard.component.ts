import { Component } from '@angular/core';
//import { User } from './pages-dashboard/alumnos-users/alumnos-users.component';
import { AlumnosFormComponent } from './pages-dashboard/alumnos-users/components/alumnos-form/alumnos-form.component';
//import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../aunth/auth.service';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '../../core/store/auth/selectors';
import { Observable } from 'rxjs';
import { User } from './pages-dashboard/alumnos-users/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;

  authUser$ : Observable <User |null> 

  constructor (
      private authservice:AuthService,
      private store: Store, ){
        this.authUser$ = this.store.select(selectAuthUser)
      }

  logout(): void {
       this.authservice.logout();
  }

 // onEditarUser(user: User): void {}



 


}
