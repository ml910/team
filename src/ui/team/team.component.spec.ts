import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TeamComponent } from './team.component';
import {JsonGetTeamMembersService} from "../../infrastructure/get-team/get-team.service";
import {HttpClientModule} from "@angular/common/http";

describe('TeamComponent', () => {
  let service: JsonGetTeamMembersService;
  const memberId: number = 12;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        TeamComponent
      ],
    }).compileComponents();
    service = TestBed.inject(JsonGetTeamMembersService);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(TeamComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have its service return the right number of members', done => {
    expect(service).toBeTruthy();
    service.getMembers(memberId).subscribe(response => {
      expect(Array.isArray(response.members)).toEqual(true);
      expect(response.members.length).toEqual(3);
      done();
    },
      error => {
      done.fail(error);
      })
  })
});
