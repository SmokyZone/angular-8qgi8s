import { ApplicationRef, NgModule, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { QuizService } from './quiz/services/quiz.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QuizAnswersComponent } from './quiz/components/quiz-answers/quiz-answers.component';
import { QuizMakerComponent } from './quiz/components/quiz-maker/quiz-maker.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [AppComponent, QuizMakerComponent, QuizAnswersComponent],
  providers: [QuizService],
  bootstrap: [AppComponent],
})
export class AppModule {}
