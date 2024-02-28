import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "../../core/services/alerts.service";
import { Observable, catchError, delay, finalize, map, of, tap } from 'rxjs';
import { LoadingService } from "../../core/services/loading.service";
import {User } from "../dashboard/pages-dashboard/alumnos-users/models";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { Store } from "@ngrx/store";
import { AuthActions } from "../../core/store/auth/actions";


interface LoguinData {
    email: null | string;
    password: null | string;
}


const MOCK_USER = {
    id: 123,
    email: '123@123.com',
    firstName: '123',
    lastName: '123',
    password: '123',
    role: 'ADMIN',
    token: ''
};


@Injectable ({providedIn: 'root'})
export class AuthService {
    //guardamos datos de usuarios
    //authUser: User | null = null;

   constructor (
    private router: Router, 
    private alertService: AlertService,
    private loadingService: LoadingService,
    private httpclient: HttpClient,
    private store: Store
    ) {}


    private setAuthUser(user: User): void {
        //this.authUser = user;
        this.store.dispatch(AuthActions.setAuthUser({user}))

        localStorage.setItem('token', user.token);
      }
    
      //validar si hay usuario con estos datos
      login(data: LoguinData): Observable<User[]> {
       return this.httpclient
        .get<User []>(
          `${environment.apiURL}/users?email=${data.email}&password=${data.password}`
        ).pipe(
          tap((response)=>{
            if (!!response[0]){
              this.setAuthUser(response[0]);
              this.router.navigate(['dashboard', 'home']);
           } else {
            this.alertService.showError('Verifica los datos: email o contraseña no son validos')
           }
          })
        )
       
        
       
      }
     
    
      logout(): void {
       // this.authUser = null
       this.store.dispatch(AuthActions.logout())
        this.router.navigate(['auth', 'login']);
        localStorage.removeItem('token');
      }
    
      //verificar q el token almacenado en localstorage es de un usuario guardado en archivo db.json
      verifyToken() {
        return this.httpclient.get<User[]>
        (`${environment.apiURL}/users?token=${localStorage.getItem('token')}`
        ).pipe(
          map((response) =>{
            if (response.length){
              this.setAuthUser(response[0]);
              return true;
            } else {
               this.store.dispatch(AuthActions.logout()); //reemplaza a this.authUser=null;
              localStorage.removeItem('token');
              return false;
            }
          })
        )
      }

       
      }
    
    
  


