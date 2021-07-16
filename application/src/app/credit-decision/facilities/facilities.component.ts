import { Component, OnInit } from '@angular/core';
import { AllServicesService } from 'src/app/all-services.service';
import {FacilityModule} from "../../facility.module";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent extends AllServicesService  implements OnInit {
  displayedColumns: string[] = ['Facility', 'Current Limit','Balance','Requested Amount','Approved Limit','Decision'];
  constructor( http:HttpClient) {
    super(http);
  }
  values: any[] | undefined;
  ngOnInit(): void {
    this.getFacility();
  }
  getFacility(){
    this.getList("http://localhost:8082/Facilities/AllFacilities",
      (result: FacilityModule[]) => {
      console.log(result);
        this.values = result;
      });
  }
}
