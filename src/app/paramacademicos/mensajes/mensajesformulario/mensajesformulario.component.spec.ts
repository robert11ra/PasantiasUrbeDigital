import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesformularioComponent } from './mensajesformulario.component';

describe('MensajesformularioComponent', () => {
  let component: MensajesformularioComponent;
  let fixture: ComponentFixture<MensajesformularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajesformularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesformularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
