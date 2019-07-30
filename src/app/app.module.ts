import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { V1Component } from './v1/v1.component';
import { V2Component } from './v2/v2.component';
import { V3Component } from './v3/v3.component';
import { V3WithValidationComponent } from './v3-with-validation/v3-with-validation.component';
import { V4Component } from './v4/v4.component';

@NgModule({
  declarations: [
    AppComponent,
    V1Component,
    V2Component,
    V3Component,
    V3WithValidationComponent,
    V4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
