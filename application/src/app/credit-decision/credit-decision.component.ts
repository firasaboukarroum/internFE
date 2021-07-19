import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-credit-decision',
  templateUrl: './credit-decision.component.html',
  styleUrls: ['./credit-decision.component.css']
})
export class CreditDecisionComponent implements OnInit {
  opened = false;
  state = true;
  displayedColumns: string[] = ['Facility', 'Current Limit','Balance','Requested Amount','Approved Limit','Decision'];
  ngOnInit(): void {
  }

  openside(event:any) {
    this.opened = event;
  }

}
