import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { EditstudentsComponent } from './editstudents/editstudents.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddstudentsComponent } from './addstudents/addstudents.component';
import { DetailstudentComponent } from './detailstudent/detailstudent.component';
import { AdddepartmentsComponent } from './adddepartments/adddepartments.component';



const routes: Routes = [
  {path:"students",component:StudentsComponent,children:[
    {path:"detailStudents/:id",component:DetailstudentComponent}
  ]},
  {path:"addStudents",component:AddstudentsComponent},
  {path:"editStudents/:id",component:EditstudentsComponent},
  {path:"deptsAdd",component:AdddepartmentsComponent},
  {path:"**",component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
