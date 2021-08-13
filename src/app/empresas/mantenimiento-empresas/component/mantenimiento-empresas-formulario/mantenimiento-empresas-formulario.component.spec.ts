import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoEmpresasFormularioComponent } from './mantenimiento-empresas-formulario.component';

describe('MantenimientoEmpresasFormularioComponent', () => {
  let component: MantenimientoEmpresasFormularioComponent;
  let fixture: ComponentFixture<MantenimientoEmpresasFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoEmpresasFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoEmpresasFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
