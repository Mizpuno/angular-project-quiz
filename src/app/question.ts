export interface Question {
    id: number,
    text: string,
    image?: string,
    choices: Choice[]
}

export interface Choice {
    id: number,
    choice: string,
    isAnswer: boolean
}
