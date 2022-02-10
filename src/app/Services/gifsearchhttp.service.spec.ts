import { TestBed } from '@angular/core/testing';

import { GifsearchhttpService } from './gifsearchhttp.service';

describe('GifsearchhttpService', () => {
  let service: GifsearchhttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifsearchhttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
