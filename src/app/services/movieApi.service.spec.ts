import { TestBed } from '@angular/core/testing';

import { movieApiService } from './movieApi.service';

describe('movieApiService', () => {
  let service: movieApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(movieApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
