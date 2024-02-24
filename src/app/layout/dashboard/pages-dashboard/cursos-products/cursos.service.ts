import { Injectable } from "@angular/core";
import { delay, finalize, of } from "rxjs";
import { Curso } from "./models";
import { LoadingService } from "../../../../core/services/loading.service";

//BASE DE DATOS
let cursos: Curso []=[
    {id: 1,
    name: 'assdfsdfd',
    startDate: new Date ()
    },    
    {id: 245,
    name: 'qsdfsdfwe',
    startDate: new Date ()
    }, 
    
    {id: 13,
    name: 'zsdfsdfxc',
    startDate: new Date ()
    }, 
]
@Injectable()
export class CursosService {

    constructor (private loadingService: LoadingService) {}

  getCursos () {
    this.loadingService.setIsLoading(true)
    return of(cursos).pipe(
        delay (2000),//demorará 2seg en cargar la tabla de cursos
         finalize (() =>this.loadingService.setIsLoading(false))) //reemplaza al complete del obs
    }

createProduct(data:Curso) {
    cursos = [...cursos, {...data, id:cursos.length+1}];

    return this.getCursos();
}



deleteCursoById(id:number){
    cursos = cursos.filter ((el) => el.id != id);
    return this.getCursos();
}
updateProducyById(id:number,data:Curso) {
    cursos=cursos.map ((el) => (el.id===id?{ ...el,...data}:el));
    return this.getCursos();
}

}