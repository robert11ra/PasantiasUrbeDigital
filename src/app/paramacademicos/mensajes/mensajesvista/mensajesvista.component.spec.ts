import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesvistaComponent } from './mensajesvista.component';

describe('MensajesvistaComponent', () => {
  let component: MensajesvistaComponent;
  let fixture: ComponentFixture<MensajesvistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajesvistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesvistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
