import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departments } from '../_models/departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  baseurl:string="http://localhost:8080/departments/";

  constructor(
    private http:HttpClient
  ) { }

  getAllDept(){
    return this.http.get<Departments[]>(this.baseurl+"list")
  }
  addDept(dept:Departments){
    return this.http.post<Departments>(this.baseurl+"add",dept)
  }

}
