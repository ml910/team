import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {TeamComponent} from './ui/team/team.component';
import {MemberComponent} from './ui/team/member/member.component';
import {HttpClientModule} from "@angular/common/http";
import {GET_TEAM, JsonGetTeamMembersService} from "./infrastructure/get-team/get-team.service";
import {TeamResolver} from "./infrastructure/team.resolver";

@NgModule({
  declarations: [
    TeamComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [TeamComponent],
  providers: [{provide: GET_TEAM, useClass: JsonGetTeamMembersService}, TeamResolver],
  exports: [TeamComponent, MemberComponent]
})
export class AppModule {
}
