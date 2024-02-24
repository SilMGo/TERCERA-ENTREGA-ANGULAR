import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "../../core/services/alerts.service";
import { delay, finalize, map, of, tap } from 'rxjs';
import { LoadingService } from "../../core/services/loading.service";
import { Alumno } from "../dashboard/pages-dashboard/alumnos-users/models";

const MOCK_USER = {
    id: 48,
    email: '123@123.com',
     name: '123',
    lastName: '123',
    password: '123',
    rol: 'ADMIN',
};

interface LoguinData {
    email: null | string;
    password: null | string;
}
@Injectable ({providedIn: 'root'})
export class AuthService {
    authUser: Alumno | null = null;

   constructor (
    private router: Router, 
    private alertService: AlertService,
    private loadingService: LoadingService
    ) {}

   private setAuthUser (mock_user: Alumno):void {
    this.authUser =mock_user;
    localStorage.setItem(
        'token',
        'sdfsdfwertet45er64tr4afsdf'
    );
   }
   
   
   login(data:LoguinData): void {

    
    
    if (
        data.email ===MOCK_USER.email &&
        data.password===MOCK_USER.password) {
        this.setAuthUser(MOCK_USER);
        this.router.navigate (['dashboard', 'home']);
           }else {
            this.alertService.showError ('email o pass incorrecto');
           }
        }
logout(): void {
    this.authUser = null;
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
}

verifyToken() {
    this.loadingService.setIsLoading(true);
    return of (localStorage.getItem('token'))
    .pipe (delay (1000),
    map ((response) => !!response),
    tap(() => {
        this.setAuthUser(MOCK_USER);
    }),
    finalize(() => this.loadingService.setIsLoading(false))
    );

}
}

