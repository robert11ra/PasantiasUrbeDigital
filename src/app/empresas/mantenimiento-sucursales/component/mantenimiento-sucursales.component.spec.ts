import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoSucursalesComponent } from './mantenimiento-sucursales.component';

describe('MantenimientoSucursalesComponent', () => {
  let component: MantenimientoSucursalesComponent;
  let fixture: ComponentFixture<MantenimientoSucursalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoSucursalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoSucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
