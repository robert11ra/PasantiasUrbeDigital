import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsjformularioComponent } from './csjformulario.component';

describe('CsjformularioComponent', () => {
  let component: CsjformularioComponent;
  let fixture: ComponentFixture<CsjformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsjformularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsjformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
