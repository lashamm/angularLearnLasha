import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angularLearnLasha';
  word = 'red'
  styleColor = 'background-color: red;'
  styleSize = 'width: 200px; background-color: red;'

  imgSrc= 'https://images.collectingcars.com/026443/main.jpg?w=1263&fit=fillmax&crop=edges&auto=format,compress&cs=srgb&q=85'
  fun(){
    console.log('test')
    if(this.word == 'red'){
      this.word = 'blue'
      this.styleColor = 'background-color: blue;'
      this.styleSize = 'width: 300px; background-color: blue;'
    }
    else{
      this.word = 'red'
      this.styleColor = 'background-color: red;'
      this.styleSize = 'width: 200px; background-color: red;'
    }
  }
}
