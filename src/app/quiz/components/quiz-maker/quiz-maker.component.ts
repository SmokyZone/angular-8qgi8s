import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../models/question.model';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'trv-quiz-maker',
  templateUrl: './quiz-maker.component.html',
  styleUrls: ['./quiz-maker.component.css'],
})
export class QuizMakerComponent implements OnInit {
  constructor(public quizService: QuizService, private router: Router) {}

  ngOnInit() {
    this.quizService.questions = [];
    this.quizService.getQuizCategories();
  }

  // redirect to answer page when the user presses the submit button
  public goToAnswerPage(): void {
    this.router.navigate(['/answers']);
  }

  // set the answer of a question when the user presses that button
  public setAnswer(question: Question, answer: string): void {
    question.selected_answer = answer;
  }

  // get the amount of questions that the user has answered
  public getSelectedAnswerCount(): number {
    let selectedAnswerCount: number = 0;
    this.quizService.questions?.map((question: Question) => {
      if (question.selected_answer && question.selected_answer.length > 0) {
        selectedAnswerCount++;
      }
    });

    return selectedAnswerCount;
  }
}
