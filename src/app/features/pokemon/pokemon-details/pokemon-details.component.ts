import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonDetails } from '../../../core/models/PokemonDetails';

@Component({
  selector: 'app-pokemon-details',
  standalone: false,
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.scss'
})
export class PokemonDetailsComponent implements OnInit {

  pokemon!: PokemonDetails;

  constructor (private _activatedRoute: ActivatedRoute) { }

  ngOnInit (): void {
    this.pokemon = this._activatedRoute.snapshot.data['pokemon'];
  }



}
