import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TeamComponent} from "./ui/team/team.component";
import {TeamResolver} from "./infrastructure/team.resolver";

const routes: Routes = [
  {
    path: '',
    component: TeamComponent,
    resolve: {team: TeamResolver}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
