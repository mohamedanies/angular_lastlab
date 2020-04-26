import { Component, OnInit } from '@angular/core';
import { Student } from '../_models/student';
import { StudentsService } from '../services/students.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailstudent',
  templateUrl: './detailstudent.component.html',
  styleUrls: ['./detailstudent.component.css']
})
export class DetailstudentComponent implements OnInit {
  std:Student;
  constructor(
    private stdser:StudentsService,
    private actviveRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.actviveRoute.params.subscribe(
      a=>this.stdser.getStudentDetails(a.id).subscribe(
        s=>this.std=s
      )
    )
  }

}
