import { TestBed } from '@angular/core/testing';

import { RentstatustableService } from './rentstatustable.service';

describe('RentstatustableService', () => {
  let service: RentstatustableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentstatustableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
