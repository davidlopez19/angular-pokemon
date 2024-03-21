import { Component } from '@angular/core';
import { PokemonModel } from '../models/pokemon.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css',
})
export class ListPokemonComponent {
  pokemonList: PokemonModel[] = [];

  constructor(private messageService: MessageService) {}

  addNewPokemonToList(pokemon: PokemonModel) {
    if (this.pokemonList.find((x) => x.nombre == pokemon.nombre) == null) {
      this.pokemonList.push(pokemon);
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'El pokemon ya existe' });
    }
  }
}
