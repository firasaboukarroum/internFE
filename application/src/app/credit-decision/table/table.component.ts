import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";

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
  showUp=false;
  open=false;
  open1=false;
  op1=false;
  op=false;
  op3=false;
  op4=false
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  click():any{
    if (this.open==false){
      this.open=true;
      this.open1=false;
    }else this.open=false;
  }
  click1():any{
    this.open1 = !this.open1;
  }
  clickop1():any{
    if (this.op4==false){
      this.op4 = true;
    }else this.op4=false;
  }
  clickop3():any{
    this.op3 = !this.op3;
    console.log('tania');
  }
  clickop():any{
    if (this.op==false){
      this.op=true;
      this.open1=false;
    }else this.op=false;
  }
   OnChange():any{

    if (  this.selectedValue == "approve-as"){
      this.result ="verified_user";
      this.color="primary";
      this.selected="Approved As";
      this.showUp=true;
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
  newChange(): void {

    this.router.navigate(['/credit-decision']);
  }
}
