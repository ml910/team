import { TestBed } from '@angular/core/testing';

import { JsonGetTeamMembersService } from './get-team.service';

describe('GetMembersService', () => {
  let service: JsonGetTeamMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonGetTeamMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
