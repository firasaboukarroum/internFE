import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-primary-header',
  templateUrl: './primary-header.component.html',
  styleUrls: ['./primary-header.component.css']
})
export class PrimaryHeaderComponent implements OnInit {
  opened = false;
  state = true;
  @Output() openedclicked: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  openclicked() {
    this.opened = !this.opened;
    this.openedclicked.emit(this.opened);
  }
}
