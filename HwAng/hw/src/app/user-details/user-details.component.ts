import { Component } from '@angular/core';
import { Student } from '../Models/student';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  user = new Student()
  userArr :any[] = []
  emptyArr :any[] = []
  btn = 'see student'
  styleBtn = ''

  addStudent(){
    this.userArr.push(this.user)
    console.log(this.userArr) 
   }
}



