import { Component, inject } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Question, Choice } from '../question';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent {
  services: QuizService = inject(QuizService)
  question: Question[]
  pages: number
  isSwitch = false

  constructor() {
    this.question = this.services.getQuizDataNoImage()
    this.pages = 0
    
    console.log(this.question)
  }

  getTrueAnswer() {
    return this.question[this.pages].choices
    .find(value => value.isAnswer)?.choice || null;
  }

  getOverallTrueAnswer(elm: Choice[]) {
    return elm.find(value => value.isAnswer)?.choice || null;
  }

  previous = () => {if (this.pages > 0) this.pages--}
  next = () => {if (this.pages < this.question.length-1) this.pages++}
  onClickQuestionList = () => this.isSwitch = true
  onClickEachQuestion = () => this.isSwitch = false
}
