import { TestBed } from '@angular/core/testing';

import { PorductFetchService } from './porduct-fetch.service';

describe('PorductFetchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PorductFetchService = TestBed.get(PorductFetchService);
    expect(service).toBeTruthy();
  });
});
