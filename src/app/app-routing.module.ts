import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonajesComponent } from './personajes/personajes.component';
import { FilmsComponent } from './films/films.component';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
  {path: 'personajes', component: PersonajesComponent},
  {path: 'peliculas', component: FilmsComponent},
  {path: 'planetas', component: PlanetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
