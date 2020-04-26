import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/student';
import { StudentsService } from '../services/students.service';
import { Router } from '@angular/router';
import { DepartmentsService } from '../services/departments.service';
import { Departments } from '../_models/departments';

@Component({
  selector: 'app-addstudents',
  templateUrl: './addstudents.component.html',
  styleUrls: ['./addstudents.component.css']
})
export class AddstudentsComponent implements OnInit {
  nstd:Student=new Student();
  depts:Departments[];
  constructor(
    private stdser:StudentsService,
    private deptser:DepartmentsService,
    private router:Router
  ) { }
  onSave(){
    this.stdser.addStudent(this.nstd).subscribe(a=>{
      console.log(a)
      this.router.navigate(['students'])
    })

  }
  ngOnInit(): void {
    this.deptser.getAllDept().subscribe(
      data=>{
        this.depts=data
      }
    )
  }

}
