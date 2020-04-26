import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Student } from '../_models/student';

@Component({
  selector: 'app-editstudents',
  templateUrl: './editstudents.component.html',
  styleUrls: ['./editstudents.component.css']
})
export class EditstudentsComponent implements OnInit {
  std:Student;
  constructor(
    private stdser:StudentsService,
    private aciveRouter:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log(this.aciveRouter.snapshot.params.id)
    this.stdser.getStudentDetails(this.aciveRouter.snapshot.params.id).subscribe(
      data=>this.std=data
    )

  }

  onSave(id){
    this.stdser.editStudent(id,this.std).subscribe(a=>{
      console.log(a)
      this.router.navigate(['students'])
    }
    )
  }


}
