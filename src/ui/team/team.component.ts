import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {JsonGetTeamMembersService} from "../../infrastructure/get-team/get-team.service";
import {Team} from "../../domain/model/team.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  team: Team;
  id: number;

  members$: Observable<Team>

  constructor(private service: JsonGetTeamMembersService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.team = data['team']
      }
    )

    this.members$ = this.service.getMembers(this.id)
  }
}
