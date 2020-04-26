import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/student';
import { StudentsService } from '../services/students.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students:Student[];
  constructor(
    private stdser:StudentsService,
    private router:Router
  ) { }

  deleteStudent(id,i){

    console.log(id)
    this.stdser.deleteStudent(id).subscribe(a=>{
      this.students.splice(i,1)
      console.log(a)
     }
    )
  }

  ngOnInit(): void {
      this.stdser.getStudents().subscribe(
        data=>this.students=data
      )
  }

}
