import {MemberResponseModel} from "../../infrastructure/member-response.model";

export class Member {
  constructor(public readonly imageSrcSet: string[], public readonly personalDetails: MemberData) {
  }

  static fromJson(responseAttributes: MemberResponseModel): Member {
    return new Member(
      responseAttributes.imageUrl,
      new MemberData(
        responseAttributes.block.title,
        responseAttributes.block.description,
        responseAttributes.block.link,
        responseAttributes.block.text)
    )
  }
}

export class MemberData {
  constructor(public readonly names: string,
              public readonly position: string,
              public readonly email: string,
              public readonly phoneNumber: number) {
  }
}
