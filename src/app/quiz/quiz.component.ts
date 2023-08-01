import { Component, inject } from '@angular/core';
import { Choice } from '../question';
import { QuizService } from '../quiz.service';
import { Question } from '../question';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  quizService: QuizService = inject(QuizService)
  quizPage = 0
  score = 0
  isEnd = false
  question: Question[];
  audio = new Audio()

  constructor () {
    this.question = this.quizService.getQuizData()
    this.audio.src = './asset/audio'
    this.resetQuiz()
  }

  onClickConfirm(choice: Choice) {
    if (choice.isAnswer) this.score++ 

    if (this.quizPage < this.question.length - 1) {
      this.quizPage++
      this.question[this.quizPage].choices.sort((a, b) => 0.5 - Math.random())
    } 
    else {
      this.isEnd = true
    }
  }

  resetQuiz() {
    this.question.sort((a, b) => 0.5 - Math.random())
    this.quizPage = 0
    this.score = 0;
    this.isEnd = false;
  }
}
