import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoTipoperioyhorarioComponent } from './mantenimiento-tipoperioyhorario.component';

describe('MantenimientoTipoperioyhorarioComponent', () => {
  let component: MantenimientoTipoperioyhorarioComponent;
  let fixture: ComponentFixture<MantenimientoTipoperioyhorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoTipoperioyhorarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoTipoperioyhorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
