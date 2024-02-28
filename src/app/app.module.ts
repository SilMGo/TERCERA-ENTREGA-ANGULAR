import { LOCALE_ID, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './core/store/index-store';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
   MatNativeDateModule,
   HttpClientModule,
   StoreModule.forRoot(appReducers, {}),
   StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })

  ],
  providers: [ 
  
  {//modificación de config x defecto de AN Mat
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
          appearance: 'outline'
              }
  },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
