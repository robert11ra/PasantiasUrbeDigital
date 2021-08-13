import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsjcomunalComponent } from './csjcomunal.component';

describe('CsjcomunalComponent', () => {
  let component: CsjcomunalComponent;
  let fixture: ComponentFixture<CsjcomunalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsjcomunalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CsjcomunalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
