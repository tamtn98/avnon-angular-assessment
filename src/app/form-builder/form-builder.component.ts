import { Component, OnInit, TemplateRef, ViewChild, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsService } from '../services/questions.service';   
import { SharedModule } from '../shared/shared.module';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { AddQuestionDialogComponent } from '../add-question-dialog/add-question-dialog.component';

@Component({
  selector: 'avnon-angular-assessment-form-builder',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './form-builder.component.html',
  styleUrl: './form-builder.component.scss',
})
export class FormBuilderComponent implements OnInit {
  // questions: any[] = [];
  get questions() {
    // have to use a getter, because getters refresh data(?)
    return this.questionsService.questions;
  }

  get isAllQuestionsFilled() {
    //TODO
    return true;
  }

  constructor(
    private questionsService: QuestionsService,
    public dialog: MatDialog,
  ) {}
  
  ngOnInit(): void {
    // this.questions = this.questionsService.questions;
  }

  addQuestion() {
    const dialogRef = this.dialog.open(AddQuestionDialogComponent, {
      width: '400px',
      // height: '600px',
      maxHeight: '70vh'
    });

    dialogRef.afterClosed().subscribe(() => {
      // this.questions = this.questionsService.questions;
    });
  }
}
