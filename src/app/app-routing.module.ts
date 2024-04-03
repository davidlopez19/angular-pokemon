import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreacionPokemonComponent } from './creacion-pokemon/creacion-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { ActualizarPokemonComponent } from './actualizar-pokemon/actualizar-pokemon.component';

const routes: Routes = [
  { path: 'creacion-pokemon', component: CreacionPokemonComponent },
  { path: 'update-pokemon/:id', component: ActualizarPokemonComponent },
  { path: 'listado-pokemon', component: ListPokemonComponent },
  { path: '', redirectTo: '/listado-pokemon', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
