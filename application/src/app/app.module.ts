import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CreditDecisionComponent} from './credit-decision/credit-decision.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {SideNavbarComponent} from './credit-decision/side-navbar/side-navbar.component';
import {TableComponent} from './credit-decision/table/table.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {FormsModule} from "@angular/forms";
import { PrimaryHeaderComponent } from './credit-decision/primary-header/primary-header.component';
import { SecuritiesComponent } from './credit-decision/securities/securities.component';
import { FacilitiesComponent } from './credit-decision/facilities/facilities.component';
import { CovenantsComponent } from './credit-decision/covenants/covenants.component';
import { SummaryComponent } from './credit-decision/summary/summary.component';
import { RecommendationsComponent } from './credit-decision/recommendations/recommendations.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    CreditDecisionComponent,
    SideNavbarComponent,
    PrimaryHeaderComponent,
    SecuritiesComponent,
    FacilitiesComponent,
    CovenantsComponent,
    SummaryComponent,
    RecommendationsComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    MatSidenavModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
