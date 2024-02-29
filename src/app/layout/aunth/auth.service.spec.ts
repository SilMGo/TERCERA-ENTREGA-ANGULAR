import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { User } from '../dashboard/pages-dashboard/alumnos-users/models';
import { Store, StoreModule } from '@ngrx/store';  // Asegúrate de importar Store
import { AuthActions } from '../../core/store/auth/actions';

describe('Pruebas de AuthService', () => {
  let authService: AuthService;
  let httpController: HttpTestingController;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService, Store], 
      imports: [HttpClientTestingModule, StoreModule.forRoot({})],
    });

    authService = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
    store = TestBed.inject(Store);
  });

  it('AuthService debe estar definido', () => {
    expect(authService).toBeTruthy();
  });

  it('Al llamar login() debe establecer un authUser en el Store', () => {
    const MOCK_RESPONSE: User[] = [
      {
        id: 23,
        firstName: 'MOCKNAME',
        lastName: 'MOCKLASTNAME',
        email: 'mock@mail.com',
        password: 'password',
        role: 'ADMIN',
        token: 'ksdjakdasdsad',
      },
    ];

    spyOn(store, 'dispatch'); 

   
    authService.login({ email: 'mock@mail.com', password: 'password' }).subscribe({
      next: () => {
        
        expect(store.dispatch).toHaveBeenCalledWith(AuthActions.setAuthUser({ user: MOCK_RESPONSE[0] }));
      },
    });

   
    httpController
      .expectOne({
        url: 'http://localhost:3000/users?email=mock@mail.com&password=password',
        method: 'GET',
      })
      .flush(MOCK_RESPONSE);
  });
});
