import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { 
    console.log("el servicio esta instanciado")
  }
}
