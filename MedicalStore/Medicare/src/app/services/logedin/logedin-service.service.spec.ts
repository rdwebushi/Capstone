import { TestBed } from '@angular/core/testing';

import { LogedinServiceService } from './logedin-service.service';

describe('LogedinServiceService', () => {
  let service: LogedinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogedinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
