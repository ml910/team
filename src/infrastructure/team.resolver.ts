import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {HttpGetMembersService} from "./get-members/get-members.service";
import {Team} from "../domain/model/team.model";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class TeamResolver implements Resolve<Team> {
  constructor(private getMembersService: HttpGetMembersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team> | Promise<Team> | Team {
    return this.getMembersService.getMembers() // TODO: Work on the method
  }
}
