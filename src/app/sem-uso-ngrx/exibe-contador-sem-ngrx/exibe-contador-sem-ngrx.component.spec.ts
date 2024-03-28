import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeContadorSemNgrxComponent } from './exibe-contador-sem-ngrx.component';

describe('ExibeContadorSemNgrxComponent', () => {
  let component: ExibeContadorSemNgrxComponent;
  let fixture: ComponentFixture<ExibeContadorSemNgrxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibeContadorSemNgrxComponent]
    });
    fixture = TestBed.createComponent(ExibeContadorSemNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
