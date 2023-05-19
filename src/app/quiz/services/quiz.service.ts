import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question, QuestionResponse } from '../models/question.model';
import {
  CategoryResult,
  TriviaCategory,
} from '../models/trivia-category.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  // variables for the quiz difficulty and category configuration
  public selectedCategoryId?: number;
  public selectedDifficulty: string = 'Easy';

  public readonly difficulties: string[] = ['Easy', 'Medium', 'Hard'];

  public categories: TriviaCategory[] = [];
  public questions?: Question[];

  public isLoading: boolean = true;

  constructor(private http: HttpClient) {}

  // load the categories for the category select
  public getQuizCategories(): void {
    this.http
      .get<CategoryResult>('https://opentdb.com/api_category.php')
      .subscribe((result: CategoryResult) => {
        this.categories = result.trivia_categories;
        // set the default category
        if (this.categories && this.categories.length > 0) {
          this.selectedCategoryId = this.categories[0].id;
        }

        this.isLoading = false;
      });
  }

  // load questions for the configured category and difficulty
  public loadQuiz(): void {
    this.http
      .get<QuestionResponse>(
        `https://opentdb.com/api.php?amount=5&category=${
          this.selectedCategoryId
        }&difficulty=${this.selectedDifficulty.toLowerCase()}&type=multiple`
      )
      .subscribe((result: QuestionResponse) => {
        if (result && result.response_code === 0) {
          this.questions = result.results;
          this.questions.map((question: Question) => {
            // add both correct and incorrect answers to an answers array and shuffle them
            question.answers = [];
            question.answers.push(question.correct_answer);
            question.answers.push(...question.incorrect_answers);
            question.answers = this.shuffleStrings(question.answers);
          });
        }
      });
  }

  // Fisher-Yates shuffle
  private shuffleStrings(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
