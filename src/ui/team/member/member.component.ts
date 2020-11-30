import {Component, Inject, OnInit} from '@angular/core';
import {GET_MEMBERS, HttpGetMembersService} from "../../../infrastructure/get-members/get-members.service";
import {Observable} from "rxjs";
import {Member} from "../../../domain/model/member.model";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  constructor(@Inject(GET_MEMBERS)private getMembersService: HttpGetMembersService) { }

  public members$: Observable<Member>

  ngOnInit(): void {
    this.members$ = this.getMembersService.getMembers()
  }

}
