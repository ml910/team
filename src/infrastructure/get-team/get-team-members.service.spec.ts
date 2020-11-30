import { TestBed } from '@angular/core/testing';

import { GetTeamMembersService } from './get-team-members.service';

describe('GetMembersService', () => {
  let service: GetTeamMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTeamMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
