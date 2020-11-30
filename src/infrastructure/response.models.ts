import {SrcSetModel} from "../domain/model/member.model";

export interface TeamResponseAttributes {
  title: string;
  memberCards: MemberResponseCounter[];
}

export interface MemberResponseCounter {
  (index: string): MemberResponseAttributes // first, second, third
}

export interface MemberResponseAttributes {
  imageUrl: SrcSetModel,
  block: MemberDetailsResponseAttributes
}

export interface MemberDetailsResponseAttributes {
  title: string,
  description: string,
  link: string,
  text: string;
}


