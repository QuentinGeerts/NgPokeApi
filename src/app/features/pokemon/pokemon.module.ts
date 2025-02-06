import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';


@NgModule({
  declarations: [
    PokemonComponent,
    PokemonDetailsComponent,
  ],
  imports: [
    PokemonRoutingModule,
    SharedModule,
  ]
})
export class PokemonModule { }
