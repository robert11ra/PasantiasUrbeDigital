import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoSucursalesFormularioComponent } from './mantenimiento-sucursales-formulario.component';

describe('MantenimientoSucursalesFormularioComponent', () => {
  let component: MantenimientoSucursalesFormularioComponent;
  let fixture: ComponentFixture<MantenimientoSucursalesFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoSucursalesFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoSucursalesFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
