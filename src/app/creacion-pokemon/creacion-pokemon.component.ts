import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonModel } from '../models/pokemon.model';
import { MessageService } from 'primeng/api';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creacion-pokemon',
  templateUrl: './creacion-pokemon.component.html',
  styleUrl: './creacion-pokemon.component.css',
})
export class CreacionPokemonComponent {
  constructor(private pokemonService: PokemonService, private router: Router) {}

  saveNewPokemon(nuevoPokemon: PokemonModel) {
    this.pokemonService.savePokemon(nuevoPokemon);
    this.router.navigateByUrl('listado-pokemon');
  }
}
