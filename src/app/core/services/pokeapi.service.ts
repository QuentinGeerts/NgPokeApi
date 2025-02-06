import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetails } from '../models/PokemonDetails';
import { PokemonList } from '../models/PokemonList';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  BASE_URL_API: string = `https://pokeapi.co/api/v2/pokemon/`;

  constructor (private _httpClient: HttpClient) { }

  get(): Observable<PokemonList> {
    return this._httpClient.get<PokemonList>(this.BASE_URL_API);
  }

  getById(id: number): Observable<PokemonDetails> {
    return this._httpClient.get<PokemonDetails>(this.BASE_URL_API + id);
  }
}
