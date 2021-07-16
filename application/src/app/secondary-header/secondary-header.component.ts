import {Component, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-secondary-header',
  templateUrl: './secondary-header.component.html',
  styleUrls: ['./secondary-header.component.css']
})
export class SecondaryHeaderComponent implements OnInit {
  @Input() opened = false;
  state = true;
  constructor() { }

  ngOnInit(): void {
  }



}
