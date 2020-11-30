import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Team} from "../domain/model/team.model";
import {JsonGetTeamMembersService} from "./get-team/get-team.service";

@Injectable({providedIn: 'root'})
export class TeamResolver implements Resolve<Team> {
  constructor(private service: JsonGetTeamMembersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team> | Promise<Team> | Team {
    return this.service.getMembers(route.params['team'])
  }
}
