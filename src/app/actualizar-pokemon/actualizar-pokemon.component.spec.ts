import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarPokemonComponent } from './actualizar-pokemon.component';

describe('ActualizarPokemonComponent', () => {
  let component: ActualizarPokemonComponent;
  let fixture: ComponentFixture<ActualizarPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarPokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
