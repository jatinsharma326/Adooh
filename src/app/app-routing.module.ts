import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OworkComponent } from './mid/owork/owork.component';
import {MidComponent} from './mid/mid.component';
import { DriverFormComponent } from './mid/driver-form/driver-form.component';
const routes: Routes = [ { path: '' , component: MidComponent }, {
path: 'ourwork', component: OworkComponent}, {path: '*', redirectTo: ''},
{path: 'register-form', component: DriverFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
