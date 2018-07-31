import { WordUnit } from "./WordUnit";
import { Question } from "./Question";

export class Game implements Iterator<Object> {
    public questions = [] as Question[];
    private _score: number = 0;
    private id: number = 0;
    private current: any = {};

    constructor(private words: WordUnit[]) {
        this.questions = words.map(word => {
            return {
                'question': word.original,
                'rightAnswer': word.translation,
                'userAnswer': ''
            }
        });
    }

    get score() {
        return this._score;
    }

    next(): IteratorResult<Question> {
        this.current = this.questions[this.id];

        if (this.id < this.questions.length) {
            return {
                done: false,
                value: this.questions[this.id++]
            }
        } else {
            return {
                done: true,
                value: null
            }
        }
    }

    saveAnswer(userAnswer) {
        this.current.userAnswer = userAnswer;
        if(this.checkCurrentAnswer()) this._score++;
    }

    checkCurrentAnswer() {
        return this.current.userAnswer.toLowerCase() === this.current.rightAnswer.toLowerCase();
    }
}