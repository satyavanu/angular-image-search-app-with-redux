import { TestBed } from '@angular/core/testing';

import { ErrorService } from './error.service';

describe('Error.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorService = TestBed.get(ErrorService);
    expect(service).toBeTruthy();
  });
});
