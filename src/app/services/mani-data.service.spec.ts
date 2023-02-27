import { TestBed } from '@angular/core/testing';

import { ManiDataService } from './mani-data.service';

describe('ManiDataService', () => {
  let service: ManiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
