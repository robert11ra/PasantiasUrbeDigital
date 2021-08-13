import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoPeriodoComponent } from './mantenimiento-periodo.component';

describe('MantenimientoPeriodoComponent', () => {
  let component: MantenimientoPeriodoComponent;
  let fixture: ComponentFixture<MantenimientoPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoPeriodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
