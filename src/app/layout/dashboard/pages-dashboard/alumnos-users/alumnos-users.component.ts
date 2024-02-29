import { Component, OnInit,  } from '@angular/core';
import { UsersService } from '../../../../core/services/users.service';
import { NgModule } from '@angular/core'
import { AlertService } from '../../../../core/services/alerts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from './alumnos-users.service';
import { User } from './models';

import { MatDialog } from '@angular/material/dialog';
import { AlumnosFormComponent } from './components/alumnos-form/alumnos-form.component';
import { LoadingService } from '../../../../core/services/loading.service';
import { forkJoin } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-alumnos-users',
  templateUrl: './alumnos-users.component.html',
  styleUrl: './alumnos-users.component.scss'

})


 
export class AlumnosUsersComponent  implements OnInit {
  displayedColumns: string[] = ['id', 'fullName', 'email', 'role', 'actions'];
  roles: string[] = [];

  dataSource: User[] = [];
  totalItems = 0;
  pageSize = 5;
  currentPage = 1;

  showForm: boolean = false;
  constructor(
    private alumnoService: AlumnosService,
    private loadingService: LoadingService,
    private route: ActivatedRoute
  ) {
    console.log(this.route.snapshot.queryParams);
  }

  ngOnInit(): void {
    this.getPageData();
  }

  getPageData(): void {
    this.loadingService.setIsLoading(true);
    forkJoin([
      this.alumnoService.getRoles(),
      // this.usersService.getUsers(),
      this.alumnoService.paginate(this.currentPage),
    ]).subscribe({
      next: (value) => {
        this.roles = value[0];

        const paginationResult = value[1];
        this.totalItems = paginationResult.items;
        this.dataSource = paginationResult.data;

        // this.dataSource = value[1];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
         if (error.status === 500) {
        alert('Error del servidor')
         }
         if (error.status === 404) {

         }
       }
      },
    });
  }

  onPage(ev: PageEvent) {
    this.currentPage = ev.pageIndex + 1;
    this.alumnoService.paginate(this.currentPage, ev.pageSize).subscribe({
      next: (paginateResult) => {
        this.totalItems = paginateResult.items;
        this.dataSource = paginateResult.data;
        this.pageSize = ev.pageSize;
      },
    });
  }

  onDeleteUser(ev: User): void {
    this.loadingService.setIsLoading(true);
    this.alumnoService.deleteUser(ev.id).subscribe({
      next: (users) => {
        this.dataSource = [...users];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }

  onUserSubmitted(ev: User): void {
    this.loadingService.setIsLoading(true);
    this.alumnoService.createUser(ev).subscribe({
      next: (users) => {
        this.dataSource = [...users];
      },
      complete: () => {
        this.loadingService.setIsLoading(false);
      },
    });
  }


  }

