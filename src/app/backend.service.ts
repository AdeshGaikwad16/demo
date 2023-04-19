import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private baseurl:string="http://localhost:2002/add"
  constructor(private http:HttpClient) { }
  Senddata(data:any){
    return this.http.post(`${this.baseurl}/addtask`,data)
  }
}
