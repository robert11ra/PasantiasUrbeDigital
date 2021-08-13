import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeplanillaComponent } from './imprimeplanilla.component';

describe('ImprimeplanillaComponent', () => {
  let component: ImprimeplanillaComponent;
  let fixture: ComponentFixture<ImprimeplanillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprimeplanillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeplanillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
