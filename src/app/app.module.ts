import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { CreacionPokemonComponent } from './creacion-pokemon/creacion-pokemon.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [AppComponent, ListPokemonComponent, CreacionPokemonComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    TableModule,
    MenuModule,
    BadgeModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    CardModule,
    ToastModule,
  ],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
