import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarReserva2Component } from './listar-reserva2.component';

describe('ListarReserva2Component', () => {
  let component: ListarReserva2Component;
  let fixture: ComponentFixture<ListarReserva2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarReserva2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarReserva2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
