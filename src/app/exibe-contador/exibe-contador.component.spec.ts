import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibeContadorComponent } from './exibe-contador.component';

describe('ExibeContadorComponent', () => {
  let component: ExibeContadorComponent;
  let fixture: ComponentFixture<ExibeContadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExibeContadorComponent]
    });
    fixture = TestBed.createComponent(ExibeContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
