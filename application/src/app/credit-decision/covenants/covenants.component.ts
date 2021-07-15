import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covenants',
  templateUrl: './covenants.component.html',
  styleUrls: ['./covenants.component.css']
})
export class CovenantsComponent implements OnInit {
  displayedColumns: string[] = ['Covenant', 'Current Amount','Proposed amount','Approved Amount','Status','Decision'];

  constructor() { }

  ngOnInit(): void {
  }

}
