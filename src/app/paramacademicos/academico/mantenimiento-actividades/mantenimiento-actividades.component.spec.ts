import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoActividadesComponent } from './mantenimiento-actividades.component';

describe('MantenimientoActividadesComponent', () => {
  let component: MantenimientoActividadesComponent;
  let fixture: ComponentFixture<MantenimientoActividadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoActividadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoActividadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
