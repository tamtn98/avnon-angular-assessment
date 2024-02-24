import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsService as QuestionService } from '../services/questions.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'avnon-angular-assessment-form-answers',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './form-answers.component.html',
  styleUrl: './form-answers.component.scss',
})
export class FormAnswersComponent {
  get answeredQuestions() {
    return this.questionService.questions;
  }

  constructor(
    private questionService: QuestionService,
  ) {}
}
