import {Injectable, InjectionToken} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Member} from "../../domain/model/member.model";
import {Observable} from "rxjs";

export interface GetMembersService {
  getMembers()
}

@Injectable({
  providedIn: 'root'
})
export class HttpGetMembersService implements GetMembersService {
  constructor(private httpClient: HttpClient) { }

  getMembers(): Observable<Member[]> {
    return this.httpClient
      .get() // TODO: work on it
  }
}

export const GET_MEMBERS = new InjectionToken<GetMembersService>('GET_MEMBERS')
