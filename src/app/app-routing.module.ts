import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizMakerComponent } from './quiz/components/quiz-maker/quiz-maker.component';
import { QuizAnswersComponent } from './quiz/components/quiz-answers/quiz-answers.component';

const routes: Routes = [
  { path: '', component: QuizMakerComponent },
  { path: 'answers', component: QuizAnswersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
