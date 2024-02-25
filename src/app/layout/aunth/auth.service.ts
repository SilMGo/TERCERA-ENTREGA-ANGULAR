import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "../../core/services/alerts.service";
import { Observable, catchError, delay, finalize, map, of, tap } from 'rxjs';
import { LoadingService } from "../../core/services/loading.service";
import {User } from "../dashboard/pages-dashboard/alumnos-users/models";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';
//import { Store } from '@ngrx/store';

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
    authUser: User | null = null;

   constructor (
    private router: Router, 
    private alertService: AlertService,
    private loadingService: LoadingService,
    //private httpClient: HttpClient,
    //private store: Store
    ) {}


    private setAuthUser(mockUser: User): void {
        this.authUser = mockUser;
        //this.store.dispatch(AuthActions.setAuthUser({ user }));
        localStorage.setItem('token','sdfsdt45435');
      }
    
      login(data: LoguinData): void {
      //login(data: LoguinData): Observable<User[]> {
        if (
            data.email === MOCK_USER.email &&
            data.password === MOCK_USER.password
          ) {
            this.setAuthUser(MOCK_USER);
            this.router.navigate(['dashboard', 'home']);
        } else {
          this.alertService.showError('Email o password invalidos');
        }
      }
      //return this.httpClient
          //.get<User[]>(
          //  `${environment.apiURL}/users?email=${data.email}&password=${data.password}`
          //)
          //.pipe(
            //tap((response) => {
              //if (!!response[0]) {
                //this.setAuthUser(response[0]);
                //this.router.navigate(['dashboard', 'home']);
              //} else {
                //this.alertService.showError('Email o password invalidos');
              //}
            //})
          //);
     // }
    
      logout(): void {
        this.authUser = null
        //this.store.dispatch(AuthActions.logout());
        this.router.navigate(['auth', 'login']);
        localStorage.removeItem('token');
      }
    
      verifyToken() {
        this.loadingService.setIsLoading(true);
        return of(localStorage.getItem('token')).pipe(
          delay(1000),
          map((response) => !!response),
          tap(() => {
            this.setAuthUser(MOCK_USER);
          }),
          finalize(() => this.loadingService.setIsLoading(false))
        );
      }

        //return this.httpClient
          //.get<User[]>(
            //`${environment.apiURL}/users?token=${localStorage.getItem('token')}`
         // )
          //.pipe(
            //map((response) => {
              //if (response.length) {
                //this.setAuthUser(response[0]);
                //return true;
              //} else {
                //this.store.dispatch(AuthActions.logout());
                //localStorage.removeItem('token');
                //return false;
             // }
            //}),
            //catchError(() => of(false))
          //);
      }
    
    
  


