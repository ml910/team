import { TestBed } from '@angular/core/testing';

import { HttpGetMembersService } from './get-members.service';

describe('GetMembersService', () => {
  let service: HttpGetMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGetMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
