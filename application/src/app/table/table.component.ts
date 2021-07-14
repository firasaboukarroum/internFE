import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

export interface Decision {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  @Input() displayedColumns: any;
  @ViewChild('decision') private ngPartial: any;
  selectedValue!: string;

  decisions: Decision[] = [
    {value: 'approve-as', viewValue: 'Approve As is'},
    {value: 'approve-with', viewValue: 'Approve With Modifications'},
    {value: 'decline', viewValue: 'Decline'},
    {value: 'return', viewValue: 'return'}
  ];
  color: any;
  result: any;
  DecisionControl = new FormControl('', [Validators.required]);
  selected="";

  constructor() { }

  ngOnInit(): void {

  }

   OnChange():any{

    if (  this.selectedValue == "approve-as"){
      this.result ="verified_user";
      this.color="primary";
      this.selected="Approved As";
    }else  if (  this.selectedValue == "approve-with"){
      this.result ="verified_user";
      this.color="primary";
      this.selected="Approved With ";
    }
    else  if (  this.selectedValue == "decline"){
      this.result ="clear";
      this.color="warn";
      this.selected="Rejected";
    }else  if (  this.selectedValue == "return"){
      this.result ="undo";
      this.color="primary";
      this.selected="Return";
    }
  }
  ngAfterViewInit(){

  }

}
