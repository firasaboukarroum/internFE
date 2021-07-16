import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {
  constructor(private http: HttpClient) { }
  
  public getList(urlb: string,callback: any) {
  console.log(this.getList);
    return this.http.get(urlb).subscribe(
      (response: any) => {
        callback(response);
      });
  }
}
