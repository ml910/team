import {Injectable, InjectionToken} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {HasDataKey} from "../api";
import {map} from "rxjs/operators";
import {Member} from "../../domain/model/member.model";
import {MemberResponseModel} from "../member-response.model";

export interface GetMembersService {
  getMembers(memberNumber: string): Observable<Member>;
}

@Injectable({
  providedIn: 'root'
})
export class HttpGetMembersService implements GetMembersService {
  protected readonly httpHeaders: HttpHeaders;

  constructor(private httpClient: HttpClient) { }

  getMembers(): Observable<Member> {
    return this.httpClient
      .get<HasDataKey<MemberResponseModel>>(
        'https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json',
        // { headers: this.httpHeaders }
      )
      .pipe(
        map(response => {
          return Member.fromJson(response.data.attributes)
        })
      )
  }
}

export const GET_MEMBERS = new InjectionToken<GetMembersService>('GET_MEMBERS')
