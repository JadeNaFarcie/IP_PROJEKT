import { Component } from '@angular/core';
import * as baza from '../../database/baza.json';

@Component({
  selector: 'app-quiz-main-page',
  templateUrl: './quiz-main-page.component.html',
  styleUrl: './quiz-main-page.component.css'
})

export class QuizMainPageComponent {
  data: any = baza;
}
