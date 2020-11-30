import {Component, Input} from '@angular/core';
import {MemberDetailsModel, SrcSetModel} from "../../../domain/model/member.model";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent {

  @Input() memberImage: SrcSetModel;
  @Input() memberDetails: MemberDetailsModel;

  constructor() { }
}
