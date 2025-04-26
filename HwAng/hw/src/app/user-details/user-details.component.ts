import { Component } from '@angular/core';
import { Student } from '../Models/student';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
  
  public user!:  Student
  
  

  userArr :any[] = []
  emptyArr :any[] = []
  btn = 'see student'
  styleBtn = ''

  addStudent(){
    this.userArr.push(this.user)
    console.log(this.userArr) 
   }

   constructor(private router: ActivatedRoute){
    this.router.params.subscribe((params => {
      console.log(params);
      this.user = this.userArr.find(user => user.data.id == params['id']);
    }))
   }
}



