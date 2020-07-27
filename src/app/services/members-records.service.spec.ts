import { TestBed } from '@angular/core/testing';

import { MembersRecordsService } from './members-records.service';

describe('MembersRecordsService', () => {
  let service: MembersRecordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembersRecordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
