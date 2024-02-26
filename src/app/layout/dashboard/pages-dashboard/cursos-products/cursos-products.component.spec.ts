import { TestBed } from "@angular/core/testing";
import { MockProvider} from'ng-mocks'
import { of } from "rxjs";
import { CursosProductsComponent } from "./cursos-products.component";
import { CursosService } from "./cursos.service";

describe('Pruebas de CursosProductsComponent', () => {
    let component: CursosProductsComponent;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [CursosProductsComponent],
        providers: [
          MockProvider(CursosService, {
            getCursos: () =>
              of([
                {id: 245,
                    name: 'Matemática',
                    startDate: new Date ()
                    }, 
                    
                    {id: 13,
                    name: 'Ciencias Sociales',
                    startDate: new Date ()
                    }, 
              ]),
          }),
        ],
      });
      component = TestBed.createComponent(CursosProductsComponent).componentInstance;
    });
  
    it('Las opciones del curso(displayedColumns) deben ser: "id", "name", "startDate", "actions"', () => {
      expect(component.displayedColumns).toContain('id');
      expect(component.displayedColumns).toContain('name');
      expect(component.displayedColumns).toContain('startDate');
      expect(component.displayedColumns).toContain('actions');
    });
  });
  