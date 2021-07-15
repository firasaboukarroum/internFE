import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
  displayedColumns: string[] = ['Facility', 'Current Limit','Balance','Requested Amount','Approved Limit','Decision'];
  constructor() { }

  ngOnInit(): void {
  }

}
