import { Component } from '@angular/core';


@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {

  questions = [
    { question: "Question 1: What is the meaning of life?", answer: "Hard to say." },
    { question: "Question 2: What's the point exactly?", answer: "Don't know." },
    { question: "Question 3: Hmmmm?", answer: "Yes." }
  ]

  activeQuestion = -1

  constructor() { }

  toggleAnswer(questionId: number): void {
    this.activeQuestion = questionId
  }

  onCloseQuestion(): void {

  }
}
