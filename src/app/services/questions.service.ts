import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private _questions = signal<any[]>([]);
  
  constructor() { }

  get questions() {
    return this._questions();
  }

  addQuestion(q: any) {
    this._questions.update(questions => [ ...questions, ({ ...q, answer: null }) ]);
  }
}
