import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location/location.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
  { path: '/:name', component: LocationComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
