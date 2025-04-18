import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  studentInfo :any = []
  studentAddress :any =[]

name :string = ''
age :any = ''
grade :any = ''
subject :string = ''
street :any = ''
city :string = ''
zip :any = ''
btn2 = 'show student(s)'
showStudentsList = false


//  obj(){
//   this.studentAddress.push({
//     street :this.street,
//     city :this.city,
//     zip :this.zip
// })
// console.log(this.studentAddress)
// }

addStudent(){
  this.studentAddress.push({
    street :this.street,
    city :this.city,
    zip :this.zip
})
  this.studentInfo.push({
      name :this.name,
      age :this.age,
      grade :this.grade,
      subject :this.subject,
      studentAddress :this.studentAddress
    })

  console.log(this.studentInfo)
  console.log(this.studentAddress)

  this.name  = ''
  this.age  = ''
  this.grade  = ''
  this.subject  = ''
  this.street  = ''
  this.city  = ''
  this.zip  = ''
}
showStudents(){
  this.showStudentsList = !this.showStudentsList
  this.btn2 = 'hide student(s)'
}
}
