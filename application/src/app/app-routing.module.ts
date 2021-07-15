import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreditDecisionComponent} from "./credit-decision/credit-decision.component";
import {FacilitiesComponent} from "./credit-decision/facilities/facilities.component";
import {SecuritiesComponent} from "./credit-decision/securities/securities.component";
import {CovenantsComponent} from "./credit-decision/covenants/covenants.component";
import {RecommendationsComponent} from "./credit-decision/recommendations/recommendations.component";
import {SummaryComponent} from "./credit-decision/summary/summary.component";

const routes: Routes = [
  {path: 'credit-decision', component: CreditDecisionComponent},
  {path: 'facilities', component: FacilitiesComponent},
  {path: 'securities', component: SecuritiesComponent},
  {path: 'summary', component: SummaryComponent},
  {path: 'covenants', component: CovenantsComponent},
  {path: 'recommendations', component: RecommendationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
