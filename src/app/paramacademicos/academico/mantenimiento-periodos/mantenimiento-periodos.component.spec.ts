import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoPeriodosComponent } from './mantenimiento-periodos.component';

describe('MantenimientoPeriodosComponent', () => {
  let component: MantenimientoPeriodosComponent;
  let fixture: ComponentFixture<MantenimientoPeriodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoPeriodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoPeriodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
