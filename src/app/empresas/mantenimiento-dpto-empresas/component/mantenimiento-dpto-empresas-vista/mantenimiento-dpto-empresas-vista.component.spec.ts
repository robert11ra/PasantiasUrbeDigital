import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoDptoEmpresasVistaComponent } from './mantenimiento-dpto-empresas-vista.component';

describe('MantenimientoDptoEmpresasVistaComponent', () => {
  let component: MantenimientoDptoEmpresasVistaComponent;
  let fixture: ComponentFixture<MantenimientoDptoEmpresasVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoDptoEmpresasVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoDptoEmpresasVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
