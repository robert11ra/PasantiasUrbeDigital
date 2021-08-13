import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoGrupoEmpresasComponent } from './mantenimiento-grupo-empresas.component';

describe('MantenimientoGrupoEmpresasComponent', () => {
  let component: MantenimientoGrupoEmpresasComponent;
  let fixture: ComponentFixture<MantenimientoGrupoEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoGrupoEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoGrupoEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
