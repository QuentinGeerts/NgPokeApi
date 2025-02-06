import { inject } from '@angular/core';
import { ResolveFn, Router } from '@angular/router';
import { of } from 'rxjs';
import { PokemonDetails } from '../models/PokemonDetails';
import { PokeapiService } from '../services/pokeapi.service';

export const pokemonResolver: ResolveFn<PokemonDetails | null> = (route, state) => {

  const id = route.params['id'];

  if (isNaN(id) || id <= 0) {
    inject(Router).navigate(['/pokedex']);
    return of(null);
  }

  return inject(PokeapiService).getById(+id);

};
