import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '../models/pokemon.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-actualizar-pokemon',
  templateUrl: './actualizar-pokemon.component.html',
  styleUrl: './actualizar-pokemon.component.css',
})
export class ActualizarPokemonComponent implements OnInit {
  idPokemon: number | null = null;
  pokemonModel = new PokemonModel();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    let idPokemon = this.activeRoute.snapshot.paramMap.get('id');
    if (idPokemon != null) {
      this.idPokemon = Number(idPokemon);
    } else {
      this.router.navigateByUrl('listado-pokemon');
    }
  }

  ngOnInit(): void {
    if (this.idPokemon != null) {
      this.pokemonModel = this.pokemonService.getPokemon(this.idPokemon);
    }
  }

  updatePokemon(nuevoPokemon: PokemonModel) {
    if (this.idPokemon != null) {
      this.pokemonService.updatePokemon(nuevoPokemon, this.idPokemon);
      this.router.navigateByUrl('listado-pokemon');
    }
  }
}
