import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
  displayedColumns: string[] = ['Description','Proposed','Approved','Chance'];

  constructor() { }

  ngOnInit(): void {
  }

}
