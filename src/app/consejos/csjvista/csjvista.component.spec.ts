import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsjvistaComponent } from './csjvista.component';

describe('CsjvistaComponent', () => {
  let component: CsjvistaComponent;
  let fixture: ComponentFixture<CsjvistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsjvistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsjvistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
