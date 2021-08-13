import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoAcademicoComponent } from './mantenimiento-academico.component';

describe('MantenimientoAcademicoComponent', () => {
  let component: MantenimientoAcademicoComponent;
  let fixture: ComponentFixture<MantenimientoAcademicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoAcademicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
