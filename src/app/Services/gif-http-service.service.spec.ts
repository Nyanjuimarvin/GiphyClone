import { TestBed } from '@angular/core/testing';

import { GifHttpServiceService } from './gif-http-service.service';

describe('GifHttpServiceService', () => {
  let service: GifHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GifHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
