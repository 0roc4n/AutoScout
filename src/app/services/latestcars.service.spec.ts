import { TestBed } from '@angular/core/testing';

import { LatestcarsService } from './latestcars.service';

describe('LatestcarsService', () => {
  let service: LatestcarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestcarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
