import { Component } from '@angular/core';
import * as baza from '../../database/baza.json';
//import * as ikony from '../../images/';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-main-page',
  templateUrl: './quiz-main-page.component.html',
  styleUrl: './quiz-main-page.component.css'
})

export class QuizMainPageComponent {
  data: any;

  constructor(private router: Router) { }

  // ngOnInit(): void {
  //   this.quizService.getQuestions().subscribe(data => {
  //     this.data = data;
  //     console.log(this.data);
  //   });
  // }

  startQuiz(category: string): void {
    this.router.navigate(['/quiz-test'], { queryParams: { category } });
  }
}
