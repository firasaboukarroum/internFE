import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css']
})
export class SideNavbarComponent implements OnInit {
  opened = false;
  state = true;


  constructor() {
  }

  ngOnInit(): void {

  }

  open(event:any) {
    this.opened = event;
  }
}
