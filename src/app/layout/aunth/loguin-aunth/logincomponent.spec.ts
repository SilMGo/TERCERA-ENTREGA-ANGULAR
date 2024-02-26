import { MockProvider } from "ng-mocks";
import { SharedModule } from "../../../shared/shared.module";
import { LoguinAunthComponent } from "./loguin-aunth.component";
import { TestBed } from "@angular/core/testing";
import { AuthService } from '../auth.service';
import { Validators } from "@angular/forms";
describe('LoginComponent', () => {
    let component: LoguinAunthComponent;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [LoguinAunthComponent],
        imports: [SharedModule],
        providers: [MockProvider(AuthService)],
      });
  
      component = TestBed.createComponent(LoguinAunthComponent).componentInstance;
    });
  
    it('El LoginComponent debe instanciarse correctamente', () => {
      expect(component).toBeTruthy();
    });
    it('El email y la clave son campos obligatorios', () => {
         expect
         (component.loginForm.get('password')?.hasValidator(Validators.required)).toBeTrue();
    expect
        (component.loginForm.get('email')?.hasValidator(Validators.required)).toBeTrue();
         });
        



})