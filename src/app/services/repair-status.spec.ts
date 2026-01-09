import { TestBed } from '@angular/core/testing';

import { RepairStatus } from './repair-status';

describe('RepairStatus', () => {
  let service: RepairStatus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepairStatus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
