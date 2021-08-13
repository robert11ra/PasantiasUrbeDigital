import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamacademicosComponent } from './paramacademicos.component';

describe('ParamacademicosComponent', () => {
  let component: ParamacademicosComponent;
  let fixture: ComponentFixture<ParamacademicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamacademicosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamacademicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
