import { TestBed } from '@angular/core/testing';

import { RentstatusService } from './rentstatus.service';

describe('RentstatusService', () => {
  let service: RentstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
