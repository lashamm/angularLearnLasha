import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
textInp: string = ''
textInpSave: string = ''
myArr: string[] = []
fun(){
this.textInpSave = this.textInp
this.myArr.push(this.textInpSave)
console.log(this.myArr)
this.textInp = ''
}
fun2(){
this.myArr.forEach(el => {
  console.log(el)
})
}
}
