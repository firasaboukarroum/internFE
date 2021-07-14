import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'application';
  opened = false;
  displayedColumns: string[] = ['Facility', 'Current Limit','Balance','Requested Amount','Approved Limit','Decision'];
}
