export interface MemberResponseModel {
  imageUrl: string[]; // TODO: this is on OBJECT
  block: {
    title: string;
    description: string;
    link: string;
    text: number;
  }
}
