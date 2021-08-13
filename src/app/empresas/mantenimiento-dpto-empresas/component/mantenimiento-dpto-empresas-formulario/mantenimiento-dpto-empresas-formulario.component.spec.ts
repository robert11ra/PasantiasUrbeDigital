import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoDptoEmpresasFormularioComponent } from './mantenimiento-dpto-empresas-formulario.component';

describe('MantenimientoDptoEmpresasFormularioComponent', () => {
  let component: MantenimientoDptoEmpresasFormularioComponent;
  let fixture: ComponentFixture<MantenimientoDptoEmpresasFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoDptoEmpresasFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoDptoEmpresasFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
