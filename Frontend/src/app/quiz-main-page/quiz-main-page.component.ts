import { Component } from '@angular/core';
import * as baza from '../../database/baza.json';
//import * as ikony from '../../images/';

@Component({
  selector: 'app-quiz-main-page',
  templateUrl: './quiz-main-page.component.html',
  styleUrl: './quiz-main-page.component.css'
})

export class QuizMainPageComponent {
  data: any = baza;
  //images: any = ikony;

  checkData() {
    console.log(this.data);
  }
}
