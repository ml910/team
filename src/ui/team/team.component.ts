import {Component, OnInit} from '@angular/core';
import {JsonGetTeamMembersService} from "../../infrastructure/get-team/get-team.service";
import {Team} from "../../domain/model/team.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  id: number;
  members$: Observable<Team>

  constructor(private service: JsonGetTeamMembersService) {}

  ngOnInit() {

    this.members$ = this.service.getMembers(this.id)
  }
}
