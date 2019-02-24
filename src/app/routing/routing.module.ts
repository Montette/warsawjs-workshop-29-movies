import { FilmsComponent } from './../components/films/films.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const routes = [
  {
    path: 'films',
  component: FilmsComponent
},
  {path: '',
  redirectTo: 'films',
pathMatch: 'full'
},
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
