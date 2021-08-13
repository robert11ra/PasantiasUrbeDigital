import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdoVistaComponent } from './edo-vista.component';

describe('EdoVistaComponent', () => {
  let component: EdoVistaComponent;
  let fixture: ComponentFixture<EdoVistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdoVistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdoVistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
