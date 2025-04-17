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

 obj(){
  this.studentAddress.push({
    street :this.street,
    city :this.city,
    zip :this.zip
})
console.log(this.studentAddress)
}

addStudent(){
  this.studentInfo.push({
      name :this.name,
      age :this.age,
      grade :this.grade,
      subject :this.subject,
      studentAddress :this.studentAddress
    })

  console.log(this.studentInfo)
  console.log(this.studentAddress)
}
}
