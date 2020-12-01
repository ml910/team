import {Member, MemberDetailsModel} from "./member.model";
import {MemberResponseAttributes, TeamResponseAttributes} from "../../infrastructure/response.models";

export class Team {
  constructor(public mainTitle: string, public members: Member[]) {
  }

  static fromJson(teamResponseAttributes: TeamResponseAttributes): Team {
    return new Team(teamResponseAttributes.title, teamResponseAttributes.memberCards[''])

  }
}
