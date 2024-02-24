import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class LoadingService {
  private loadingTriggered$ = new BehaviorSubject<boolean>(false);

  public isLoading$ = this.loadingTriggered$.asObservable();

  setIsLoading(value: boolean): void { // si recibe true se muestra se esta cargando si es false no muestra
    this.loadingTriggered$.next(value);
  }
}