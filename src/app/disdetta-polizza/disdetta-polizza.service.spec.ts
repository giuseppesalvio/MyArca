import { TestBed } from '@angular/core/testing';

import { DisdettaPolizzaService } from './disdetta-polizza.service';

describe('DisdettaPolizzaService', () => {
  let service: DisdettaPolizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisdettaPolizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
