import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { QuestionsService } from '../services/questions.service';

@Component({
  selector: 'avnon-angular-assessment-add-question-dialog',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './add-question-dialog.component.html',
  styleUrl: './add-question-dialog.component.scss',
})
export class AddQuestionDialogComponent {
  questionTypes = [
    { value: 'checkbox', label: 'Checkbox List' },
    { value: 'paragraph', label: 'Paragraph' },
  ];

  // questionType 'checkbox' | 'paragraph'
  // questionValue: string[] (for checkbox) | string (for paragraph)
  // required: boolean
  question: any = {
    type: 'paragraph',
    value: '',
    required: true,
  };

  get isValid() {
    // TODO: "or" with condition of checkbox
    return (
      this.question.type === 'paragraph' &&
      this.question.value !== '' &&
      this.question.value !== null &&
      this.question.value !== undefined
    );
  }

  constructor(
    private questionsService: QuestionsService,
  ) {}

  submitQuestion() {
    //should have some kind of validating step here?
    this.questionsService.addQuestion(this.question);
  }
}
