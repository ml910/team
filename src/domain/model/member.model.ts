export class Member {
  constructor(public srcSet: SrcSetModel, public details: MemberDetailsModel) {
  }
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
  getSrcSetValue() {
    return `${this.w200} 200w, ${this.w400} 400w, ${this.w1080} 1080w, ${this.w1920} 1920w, ${this.w2560} 2560w`
  }

  constructor(public w200: string, public w400: string, public w1080: string, public w1920: string, public w2560: string) {}
}
