import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-securities',
  templateUrl: './securities.component.html',
  styleUrls: ['./securities.component.css']
})
export class SecuritiesComponent implements OnInit {
  displayedColumns: string[] = ['Security', 'Current Amount','Proposed amount','Approved Amount','Status','Decision'];

  constructor() { }

  ngOnInit(): void {
  }

}
