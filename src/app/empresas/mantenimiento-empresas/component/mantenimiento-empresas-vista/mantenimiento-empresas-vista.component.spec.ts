import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoEmpresasVistaComponent } from './mantenimiento-empresas-vista.component';

describe('MantenimientoEmpresasVistaComponent', () => {
  let component: MantenimientoEmpresasVistaComponent;
  let fixture: ComponentFixture<MantenimientoEmpresasVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoEmpresasVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoEmpresasVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
