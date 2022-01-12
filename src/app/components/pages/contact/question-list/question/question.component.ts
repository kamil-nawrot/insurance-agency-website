import { animate, group, state, style, transition, trigger } from "@angular/animations";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  animations: [
    trigger("arrow-toggle", [
      state("initial", style({
        transform: "rotate(0deg)"
      })),
      state("reversed", style({
        transform: "rotate(180deg)"
      })),
      transition("initial <=> reversed", animate(200))
    ]),
    trigger("question-appearance", [
      transition("void => reversed", [
        style({
          height: 0,
          transform: "translateY(-20px)",
          marginTop: 0,
          marginBottom: 0,
          opacity: 0
        }), group([
          animate(200, style({
            height: "auto",
            transform: "translateY(0)",
            marginTop: "1rem",
            marginBottom: "2rem",
            opacity: 1
          }))
        ]),
      ]),
      transition("reversed => void", group([
        animate(200, style({
          height: 0,
          transform: "translateY(-20px)",
          marginTop: 0,
          marginBottom: 0

        })),
        animate(200, style({
          opacity: 0
        }))
      ]))
    ])
  ]
})
export class QuestionComponent implements OnInit {

  @Input() question: {  question: string, answer: string } | undefined
  @Output() closeQuestion: EventEmitter<any> = new EventEmitter<any>()

  dropdownIcon = faArrowDown
  arrowState = "initial"

  constructor() { }

  ngOnInit(): void {
  }

  onToggleQuestion() {
    if(this.arrowState === "initial") {
      this.arrowState = "reversed"
    }
    else {
      this.arrowState = "initial"
      this.closeQuestion.emit()
    }
  }

}
