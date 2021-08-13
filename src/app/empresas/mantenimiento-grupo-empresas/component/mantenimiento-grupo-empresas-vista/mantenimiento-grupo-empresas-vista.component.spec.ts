import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoGrupoEmpresasVistaComponent } from './mantenimiento-grupo-empresas-vista.component';

describe('MantenimientoGrupoEmpresasVistaComponent', () => {
  let component: MantenimientoGrupoEmpresasVistaComponent;
  let fixture: ComponentFixture<MantenimientoGrupoEmpresasVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoGrupoEmpresasVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoGrupoEmpresasVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
