import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizandoEstadoSemUsoDeNgrxComponent } from './atualizando-estado-sem-uso-de-ngrx.component';

describe('AtualizandoEstadoSemUsoDeNgrxComponent', () => {
  let component: AtualizandoEstadoSemUsoDeNgrxComponent;
  let fixture: ComponentFixture<AtualizandoEstadoSemUsoDeNgrxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AtualizandoEstadoSemUsoDeNgrxComponent]
    });
    fixture = TestBed.createComponent(AtualizandoEstadoSemUsoDeNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
