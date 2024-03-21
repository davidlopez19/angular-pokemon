import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionPokemonComponent } from './creacion-pokemon.component';

describe('CreacionPokemonComponent', () => {
  let component: CreacionPokemonComponent;
  let fixture: ComponentFixture<CreacionPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreacionPokemonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreacionPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
