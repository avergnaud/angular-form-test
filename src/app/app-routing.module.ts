import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V1Component } from './v1/v1.component';
import { V2Component } from './v2/v2.component';
import { V3Component } from './v3/v3.component';
import { V3WithValidationComponent } from './v3-with-validation/v3-with-validation.component';
import { V4Component } from './v4/v4.component';

const routes: Routes = [
  { path: 'v1', component: V1Component},
  { path: 'v2', component: V2Component},
  { path: 'v3', component: V3Component},
  { path: 'v3-val', component: V3WithValidationComponent},
  { path: 'v4', component: V4Component},
  {path: '**', redirectTo: 'v1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
