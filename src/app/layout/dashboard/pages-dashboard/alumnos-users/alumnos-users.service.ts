import { Injectable,  } from "@angular/core";
import { delay, finalize, mergeMap, of } from "rxjs";
import { Alumno } from "./models";
import { LoadingService } from "../../../../core/services/loading.service";
import { AlertService } from "../../../../core/services/alerts.service";
import { HttpClient } from "@angular/common/http";

// simula base de datos
let ALUMNOS_DB :  Alumno [] = [
   
]
@Injectable ()
export class AlumnosService {

    constructor  (
        private  loadingService: LoadingService,
        private alertService: AlertService,
        private httpclient: HttpClient){}

   //metodo q consulta alumnos
    getAlumnos() {
       //this.loadingService.setIsLoading(true)
       // return of(alumnos). pipe(delay (1500),
       //finalize(() => this.loadingService.setIsLoading(false)));
       return this.httpclient.get<any>('http://localhost:3000/alumnos')

    }
    createAlumnos(payload:Alumno) {
        //ALUMNOS_DB = [...ALUMNOS_DB, {...payload, id:ALUMNOS_DB.length+1}];     
        //return this.getAlumnos();
        return this.httpclient
        .post<any>(('http://localhost:3000/alumnos'),payload)
        .pipe (mergeMap (()=>this.getAlumnos ()   )) ;    }


//ELIMINAR PRODUCTOS DE LA TABLA
    deleteAlumnoById(id: number){
        ALUMNOS_DB = ALUMNOS_DB.filter ((el) => el.id != id);
        return this.getAlumnos();
    }
    updateAlumnoById(id: number, data: Alumno) {
        ALUMNOS_DB = ALUMNOS_DB.map((el) => (el.id ===id ? {...el, ...data} : el));
        return this.getAlumnos();
    }

}