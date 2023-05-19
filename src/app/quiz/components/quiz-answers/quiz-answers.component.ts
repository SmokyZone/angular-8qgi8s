import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Question } from '../../models/question.model';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'trv-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css'],
})
export class QuizAnswersComponent implements OnInit {
  public score: number = 0;

  constructor(
    public quizService: QuizService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.calculateScore();
  }

  // calculates the final score of the user (each correct answer gives 1 point)
  private calculateScore(): void {
    this.quizService.questions?.map((question: Question) => {
      if (question.selected_answer === question.correct_answer) {
        this.score++;
      }
    });
  }

  // redirect to Quiz Maker page
  public goToQuizCreation(): void {
    this.router.navigate(['/']);
  }

  public sanizizeHTML(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
