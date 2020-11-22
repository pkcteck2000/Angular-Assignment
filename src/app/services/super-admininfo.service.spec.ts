import { TestBed } from '@angular/core/testing';

import { SuperAdmininfoService } from './super-admininfo.service';

describe('SuperAdmininfoService', () => {
  let service: SuperAdmininfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperAdmininfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
