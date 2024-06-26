import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-test',
  templateUrl: './quiz-test.component.html',
  styleUrl: './quiz-test.component.css'
})
export class QuizTestComponent implements OnInit {

  questions: any[] = [];
  currentQuestionIndex: number = 0;
  userAnswers: any[] = [];
  showResults: boolean = false;
  category: string = '';

  constructor(
    private quizService: FirebaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
      this.fetchQuestions();
    });
  }

  fetchQuestions(): void {
    this.quizService.getQuestions(this.category).subscribe(data => {
      this.questions = data;
    });
  }

  selectAnswer(answer: any): void {
    this.userAnswers[this.currentQuestionIndex] = answer;
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.showResults = true;
    }
  }
}
