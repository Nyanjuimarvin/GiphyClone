import { TestBed } from '@angular/core/testing';

import { RandomhttpService } from './randomhttp.service';

describe('RandomhttpService', () => {
  let service: RandomhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
