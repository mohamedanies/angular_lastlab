import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../_models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseurl:string="http://localhost:8080/students/";
  constructor(private http:HttpClient) { }
  getStudents(){
    return this.http.get<Student[]>(this.baseurl+"list")
  }
  addStudent(std:Student){
    return this.http.post<Student>(this.baseurl+"add",std)
  }
  getStudentDetails(id:number){
   return this.http.get<Student>(this.baseurl+"details/"+id)
  }
  deleteStudent(id:number){
    return this.http.get(this.baseurl+"delete/"+id)
  }
  editStudent(id,std){
    return this.http.post<Student>(this.baseurl+"edit/"+id,std)
  }
}
