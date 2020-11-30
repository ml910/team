import {Member, MemberDetailsModel} from "./member.model";
import {MemberResponseAttributes, TeamResponseAttributes} from "../../infrastructure/response.models";

export class Team {
  constructor(public mainTitle: string, public members: Member[]) {
  }

  static fromJson(teamResponseAttributes: TeamResponseAttributes, memberResponseAttributes: MemberResponseAttributes): Team {
    return new Team(
      teamResponseAttributes.title, Object.entries(
        teamResponseAttributes.memberCards).map(response => {
        return new Member(memberResponseAttributes.imageUrl,
          new MemberDetailsModel(
            memberResponseAttributes.block.title,
            memberResponseAttributes.block.description,
            memberResponseAttributes.block.link,
            memberResponseAttributes.block.text))
      })
    )
  }
}

