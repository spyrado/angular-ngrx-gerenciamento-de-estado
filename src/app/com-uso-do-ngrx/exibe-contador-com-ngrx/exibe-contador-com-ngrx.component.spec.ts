import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeContadorComNgrxComponent } from './exibe-contador-com-ngrx.component';

describe('ExibeContadorComNgrxComponent', () => {
  let component: ExibeContadorComNgrxComponent;
  let fixture: ComponentFixture<ExibeContadorComNgrxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibeContadorComNgrxComponent]
    });
    fixture = TestBed.createComponent(ExibeContadorComNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
