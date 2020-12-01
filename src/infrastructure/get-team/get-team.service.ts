import {Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Team} from "../../domain/model/team.model";
import {HasDataKey} from "../api";
import {map} from "rxjs/operators";
import {TeamResponseAttributes} from "../response.models";

export interface GetTeamService {
  getMembers(memberId: number): Observable<Team>;
}

@Injectable({
  providedIn: 'root'
})
export class JsonGetTeamMembersService implements GetTeamService {
  constructor(private httpClient: HttpClient) { }

  getMembers(memberId: number): Observable<Team> {
    return this.httpClient
      .get<HasDataKey<TeamResponseAttributes>>(
        '/assets/local.json'
      )
      .pipe(map((jsonResponse) => Team.fromJson(
        jsonResponse.data[0].attributes
        )))
  }
}

export const GET_TEAM = new InjectionToken<GetTeamService>('GET_TEAM')
