import { TestBed } from '@angular/core/testing';

import { ParamacademicosService } from './paramacademicos.service';

describe('ParamacademicosService', () => {
  let service: ParamacademicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamacademicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
