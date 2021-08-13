import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoTipoyperiodoComponent } from './mantenimiento-tipoyperiodo.component';

describe('MantenimientoTipoyperiodoComponent', () => {
  let component: MantenimientoTipoyperiodoComponent;
  let fixture: ComponentFixture<MantenimientoTipoyperiodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoTipoyperiodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoTipoyperiodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
