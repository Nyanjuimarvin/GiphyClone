import { TestBed } from '@angular/core/testing';

import { ViewmorehttpService } from './viewmorehttp.service';

describe('ViewmorehttpService', () => {
  let service: ViewmorehttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewmorehttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
