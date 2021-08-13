import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoCalendarioComponent } from './mantenimiento-calendario.component';

describe('MantenimientoCalendarioComponent', () => {
  let component: MantenimientoCalendarioComponent;
  let fixture: ComponentFixture<MantenimientoCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantenimientoCalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
