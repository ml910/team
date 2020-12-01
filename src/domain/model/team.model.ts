import {Member, MemberDetailsModel, SrcSetModel} from "./member.model";
import {TeamResponseAttributes} from "../../infrastructure/response.models";

export class Team {
  constructor(public mainTitle: string, public members: Member[]) {
  }

  static fromJson(teamResponseAttributes: TeamResponseAttributes): Team {
    return new Team(teamResponseAttributes.title,
      Object.values(teamResponseAttributes.memberCards)
        .map(member => new Member(
          new SrcSetModel(member.imageUrl.w200, member.imageUrl.w400, member.imageUrl.w1080,
            member.imageUrl.w1920, member.imageUrl.w2560),
          new MemberDetailsModel(member.block.title, member.block.description, member.block.link, member.block.text))))

  }
}
