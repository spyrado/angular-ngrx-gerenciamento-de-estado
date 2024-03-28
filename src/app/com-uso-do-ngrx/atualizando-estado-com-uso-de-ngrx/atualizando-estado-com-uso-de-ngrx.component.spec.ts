import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizandoEstadoComUsoDeNgrxComponent } from './atualizando-estado-com-uso-de-ngrx.component';

describe('AtualizandoEstadoComUsoDeNgrxComponent', () => {
  let component: AtualizandoEstadoComUsoDeNgrxComponent;
  let fixture: ComponentFixture<AtualizandoEstadoComUsoDeNgrxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizandoEstadoComUsoDeNgrxComponent]
    });
    fixture = TestBed.createComponent(AtualizandoEstadoComUsoDeNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
