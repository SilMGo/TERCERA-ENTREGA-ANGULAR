import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layout/aunth/auth.service';
import { Inject, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '../store/auth/selectors';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const authService = inject(AuthService);
  
  const store = inject(Store);

  return store.select(selectAuthUser).pipe(
    map((user) => {
      return user?.role === 'ADMIN'
        ? true
        : router.createUrlTree(['dashboard', 'home']);
    })
  );
};
