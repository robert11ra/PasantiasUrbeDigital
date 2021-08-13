import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoDptoEmpresasComponent } from './mantenimiento-dpto-empresas.component';

describe('MantenimientoDptoEmpresasComponent', () => {
  let component: MantenimientoDptoEmpresasComponent;
  let fixture: ComponentFixture<MantenimientoDptoEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoDptoEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoDptoEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
