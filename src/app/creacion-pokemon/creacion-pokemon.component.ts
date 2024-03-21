import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PokemonModel } from '../models/pokemon.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-creacion-pokemon',
  templateUrl: './creacion-pokemon.component.html',
  styleUrl: './creacion-pokemon.component.css',
})
export class CreacionPokemonComponent {
  constructor(private messageService: MessageService) {}

  nuevoPokemon: PokemonModel = new PokemonModel();
  @Output() eventSavePokemon = new EventEmitter<PokemonModel>();

  savePokemon() {
    this.eventSavePokemon.emit(this.nuevoPokemon);
    this.nuevoPokemon = new PokemonModel();
  }
}
