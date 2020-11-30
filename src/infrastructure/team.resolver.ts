import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {HttpGetMembersService} from "./get-members/get-members.service";
import {Observable} from "rxjs";
import {Member} from "../domain/model/member.model";

@Injectable({providedIn: 'root'})
export class TeamResolver implements Resolve<Member> {
  constructor(private getMembersService: HttpGetMembersService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Member> | Promise<Member> | Member {
    return this.getMembersService.getMembers()
  }
}
