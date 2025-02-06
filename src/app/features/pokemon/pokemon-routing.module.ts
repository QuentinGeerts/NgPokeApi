import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pokemonResolver } from '../../core/resolvers/pokemon.resolver';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonComponent } from './pokemon.component';

const routes: Routes = [

  { path: '', component: PokemonComponent },
  { path: 'details/:id', component: PokemonDetailsComponent, resolve: { pokemon: pokemonResolver } }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
