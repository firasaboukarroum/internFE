import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreditDecisionComponent} from "./credit-decision/credit-decision.component";

const routes: Routes = [
  {path: 'credit-decision', component: CreditDecisionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
