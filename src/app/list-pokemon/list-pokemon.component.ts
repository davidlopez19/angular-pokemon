import { Component } from '@angular/core';
import { PokemonModel } from '../models/pokemon.model';
import { ConfirmationService, MessageService } from 'primeng/api';
import { PokemonService } from '../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css',
})
export class ListPokemonComponent {
  pokemonList: PokemonModel[] = [];

  constructor(
    private pokemonService: PokemonService,
    private router: Router,
    private confirmationService: ConfirmationService
  ) {
    this.getAllPokemon();
  }

  getAllPokemon() {
    this.pokemonList = this.pokemonService.getAllPokemon();
  }

  updatePokemon(pokemon: PokemonModel) {
    let position = this.pokemonList.indexOf(pokemon);
    this.router.navigate(['/update-pokemon', position]);
  }

  deletePokemon(event: Event, pokemon: PokemonModel) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: `Esta seguro que quiere eliminar el pokemon ${pokemon.nombre}?`,
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon: 'none',
      rejectIcon: 'none',
      rejectButtonStyleClass: 'p-button-text',
      accept: () => {
        let position = this.pokemonList.indexOf(pokemon);
        this.pokemonService.deletePokemon(position);
        this.getAllPokemon();
      },
      reject: () => {},
    });
  }
}
