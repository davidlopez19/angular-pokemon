import { Injectable } from '@angular/core';
import { PokemonModel } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor() {}

  private listPokemon: PokemonModel[] = [];

  savePokemon(pokemon: PokemonModel) {
    this.listPokemon.push(pokemon);
    localStorage.setItem(
      'listadoDePokemones',
      JSON.stringify(this.listPokemon)
    );
  }

  getAllPokemon(): PokemonModel[] {
    let listPokemonString = localStorage.getItem('listadoDePokemones');
    if (listPokemonString != null) {
      this.listPokemon = JSON.parse(listPokemonString);
    }
    return this.listPokemon;
  }

  getPokemon(idPokemon: number): PokemonModel {
    return this.getAllPokemon()[idPokemon];
  }

  updatePokemon(newPokemon: PokemonModel, idPokemon: number) {
    this.getAllPokemon();
    this.listPokemon[idPokemon] = newPokemon;
    localStorage.setItem(
      'listadoDePokemones',
      JSON.stringify(this.listPokemon)
    );
  }

  deletePokemon(idPokemon: number){
    this.getAllPokemon();
    this.listPokemon.splice(idPokemon,1);
    localStorage.setItem(
      'listadoDePokemones',
      JSON.stringify(this.listPokemon)
    );
  }
}
