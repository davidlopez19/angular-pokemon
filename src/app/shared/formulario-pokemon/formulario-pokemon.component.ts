import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonModel } from '../../models/pokemon.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-formulario-pokemon',
  templateUrl: './formulario-pokemon.component.html',
  styleUrl: './formulario-pokemon.component.css',
})
export class FormularioPokemonComponent {
  constructor(private messageService: MessageService) {}

  @Input() nuevoPokemon: PokemonModel = new PokemonModel();

  @Output() eventSaveFormPokemon = new EventEmitter<PokemonModel>();

  savePokemon() {
    debugger
    if (this.validatePokemon()) {
      this.eventSaveFormPokemon.emit(this.nuevoPokemon);
    }
  }

  validatePokemon(): boolean {
    let isValidPokemon = true;
    if (this.nuevoPokemon.nombre.trim() == '') {
      this.messageService.add({
        severity: 'warn',
        summary: 'warn',
        detail: 'Error nombre vacio',
      });
      isValidPokemon = false;
    }
    if (this.nuevoPokemon.tipo.trim() == '') {
      this.messageService.add({
        severity: 'warn',
        summary: 'warn',
        detail: 'Error tipo vacio',
      });
      isValidPokemon = false;
    }
    if (this.nuevoPokemon.tamano == 0) {
      this.messageService.add({
        severity: 'warn',
        summary: 'warn',
        detail: 'Error tamano vacio',
      });
      isValidPokemon = false;
    }
    return isValidPokemon;
  }
}
