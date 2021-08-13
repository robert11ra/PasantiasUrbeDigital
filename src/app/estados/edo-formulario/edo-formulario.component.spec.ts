import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdoFormularioComponent } from './edo-formulario.component';

describe('EdoFormularioComponent', () => {
  let component: EdoFormularioComponent;
  let fixture: ComponentFixture<EdoFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdoFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdoFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
