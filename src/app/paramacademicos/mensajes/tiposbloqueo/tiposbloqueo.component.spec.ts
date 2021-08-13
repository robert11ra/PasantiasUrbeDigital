import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposbloqueoComponent } from './tiposbloqueo.component';

describe('TiposbloqueoComponent', () => {
  let component: TiposbloqueoComponent;
  let fixture: ComponentFixture<TiposbloqueoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiposbloqueoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposbloqueoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
