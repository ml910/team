import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {TeamComponent} from './ui/team/team.component';
import {MemberComponent} from './ui/team/member/member.component';
// import {TeamResolver} from "./infrastructure/team.resolver";
import {HttpClientModule} from "@angular/common/http";

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
  // providers: [TeamResolver],
  bootstrap: [TeamComponent],
  exports: [TeamComponent, MemberComponent]
})
export class AppModule {
}
