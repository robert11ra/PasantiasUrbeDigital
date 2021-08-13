import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoSucursalesVistaComponent } from './mantenimiento-sucursales-vista.component';

describe('MantenimientoSucursalesVistaComponent', () => {
  let component: MantenimientoSucursalesVistaComponent;
  let fixture: ComponentFixture<MantenimientoSucursalesVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoSucursalesVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoSucursalesVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
