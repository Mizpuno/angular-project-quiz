import { Injectable } from '@angular/core';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  quizData: Question[] = [
    {
      id: 1,
      text: 'What is the capital city of France?',
      choices: [
        {
          id: 1,
          choice: 'Paris',
          isAnswer: true
        },
        {
          id: 2,
          choice: 'Rome',
          isAnswer: false
        },
        {
          id: 3,
          choice: 'London',
          isAnswer: false
        },
        {
          id: 4,
          choice: 'Berlin',
          isAnswer: false
        }
      ]
    },
    {
      id: 2,
      text: 'Which planet is closest to the Sun?',
      choices: [
        {
          id: 1,
          choice: 'Venus',
          isAnswer: false
        },
        {
          id: 2,
          choice: 'Mars',
          isAnswer: false
        },
        {
          id: 3,
          choice: 'Earth',
          isAnswer: false
        },
        {
          id: 4,
          choice: 'Mercury',
          isAnswer: true
        }
      ]
    },
    {
      id: 3,
      text: 'What is the largest mammal in the world?',
      choices: [
        {
          id: 1,
          choice: 'Elephant',
          isAnswer: false
        },
        {
          id: 2,
          choice: 'Blue Whale',
          isAnswer: true
        },
        {
          id: 3,
          choice: 'Giraffe',
          isAnswer: false
        },
        {
          id: 4,
          choice: 'Hippopotamus',
          isAnswer: false
        }
      ]
    },
    {
      id: 4,
      text: 'Who painted the Mona Lisa?',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg', 
      choices: [
        {
          id: 1,
          choice: 'Vincent van Gogh',
          isAnswer: false
        },
        {
          id: 2,
          choice: 'Leonardo da Vinci',
          isAnswer: true  
        },
        {
          id: 3,
          choice: 'Pablo Picasso',
          isAnswer: false
        },
        {
          id: 4,
          choice: 'Michelangelo',
          isAnswer: false
        }
      ]
    },
    {
      id: 5,
      text: 'Which country is known as the Land of the Rising Sun?',
      choices: [
        {
          id: 1,
          choice: 'China',
          isAnswer: false
        },
        {
          id: 2,
          choice: 'Japan',
          isAnswer: true
        },
        {
          id: 3,
          choice: 'Thailand',
          isAnswer: false
        },
        {
          id: 4,
          choice: 'India',
          isAnswer: false
        }
      ]
    },
    {
      id: 6,
      text: 'What is the chemical symbol for water?',
      choices: [
        {
          id: 1,
          choice: 'O2',
          isAnswer: false
        },
        {
          id: 2,
          choice: 'H2O',
          isAnswer: true
        },
        {
          id: 3,
          choice: 'CO2',
          isAnswer: false
        },
        {
          id: 4,
          choice: 'NaCl',
          isAnswer: false
        }
      ]
    },
    {
      id: 7,
      text: 'Which famous physicist developed the theory of general relativity?',
      choices: [
        {
          id: 1,
          choice: 'Albert Einstein',
          isAnswer: true
        },
        {
          id: 2,
          choice: 'Isaac Newton',
          isAnswer: false
        },
        {
          id: 3,
          choice: 'Galileo Galilei',
          isAnswer: false
        },
        {
          id: 4,
          choice: 'Nikola Tesla',
          isAnswer: false
        }
      ]
    }
  ];

  constructor() { }

  getQuizData() {
    return this.quizData
  }
}
