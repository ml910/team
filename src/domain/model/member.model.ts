export class Member {
  constructor(public srcSet: SrcSetModel, public details: MemberDetailsModel) {
  }
}

export class MemberCollection {
  constructor(public first: Member, public second: Member, public third: Member) {
  }
}

export interface MemberDetailsBlockModel {
  block: MemberDetailsModel
}

export class MemberDetailsModel {
  constructor(
    public names: string,
    public position: string,
    public email: string,
    public phoneNumber: string) {
  }
}

export class SrcSetModel {
  constructor(public w200: string, public w400: string, public w1080: string, public w1920: string, public w2560: string) {
  return new SrcSetModel(this.w200, this.w400, this.w1080, this.w1920, this.w2560)}
}
