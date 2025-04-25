import { Component } from '@angular/core';
import { Student } from '../Models/student'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user = new Student()
  userArr :any[] = []
  emptyArr :any[] = []
  btn = 'show students'
  styleBtn = ''

  addStudent(){
    this.userArr.push(this.user)
    console.log(this.userArr)
    this.styleBtn = 'display:none'
  }
}
