import { Injectable, OnInit,  } from "@angular/core";
import { Observable, catchError, delay, finalize, forkJoin, mergeMap, of } from "rxjs";
import { User } from "./models";
import { LoadingService } from "../../../../core/services/loading.service";
import { AlertService } from "../../../../core/services/alerts.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment.prod";
import { Pagination } from "../../../../core/models/pagination";
import { ActivatedRoute } from "@angular/router";

const ROLES_DB: string[] = ['ADMIN', 'USER'];

let USERS_DB: User[] = [];


@Injectable ()
export class AlumnosService {
    
    constructor(
        private alertservice: AlertService, 
        private httpClient: HttpClient) {}

        //random aleatorio
generateString(length: number) {
  const characters =
    'Aijklmnopqrstuvwxyz0123456789';
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}





getUserById(id: number | string): Observable<User | undefined> {
  return this.httpClient.get<User>(`${environment.apiURL}/users/${id}`);
}

getRoles(): Observable<string[]> {
  return of(ROLES_DB).pipe(delay(1000));
}

getUsers() {
  // let headers = new HttpHeaders();
  // headers = headers.append('HOLAMUNDO', localStorage.getItem('token') || '');
  return this.httpClient
    .get<User[]>(`${environment.apiURL}/users`, {
      // headers: headers,
    })
    .pipe(
      catchError((error) => {
        this.alertservice.showError('Error al cargar los datos');
        return of([]);
      })
    );
}

paginate(page: number, perPage = 5) {
  return this.httpClient.get<Pagination<User>>(
    `${environment.apiURL}/users?_page=${page}&_per_page=${perPage}`
  );
}

createUser(payload: User) {
  return this.httpClient
    .post<User>(`${environment.apiURL}/users`, {
      ...payload,token: this.generateString(8),
    })
    .pipe(mergeMap(() => this.getUsers()));
}

deleteUser(userID: number) {
  // USERS_DB = USERS_DB.filter((user) => user.id !== userID);
  // return this.getUsers().pipe(
  //   tap(() =>
  //     this.alerts.showSuccess('Realizado', 'Se elimino correctamente')
  //   )
  // );
  return this.httpClient
    .delete<User>(`${environment.apiURL}/users/${userID}`)
    .pipe(mergeMap(() => this.getUsers()));
}

getAllBuyers(): Observable<User[]> {
  return this.httpClient.get<User[]>(
    `${environment.apiURL}/users?role=BUYER`
  );
}
}
