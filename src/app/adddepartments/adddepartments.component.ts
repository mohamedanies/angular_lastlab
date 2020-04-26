import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../services/departments.service';
import { Student } from '../_models/student';
import { Departments } from '../_models/departments';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adddepartments',
  templateUrl: './adddepartments.component.html',
  styleUrls: ['./adddepartments.component.css']
})
export class AdddepartmentsComponent implements OnInit {
  ndept:Departments=new Departments()
  constructor(
    private deptser:DepartmentsService,
    private router:Router

  ) { }
  onSave(){
    this.deptser.addDept(this.ndept).subscribe(a=>{
      console.log(a)
      this.router.navigate(['addStudents'])

    })
  }

  ngOnInit(): void {


  }

}
