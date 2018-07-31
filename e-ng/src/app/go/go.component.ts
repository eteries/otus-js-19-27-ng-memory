import { Component, OnInit } from '@angular/core';
import { Game } from '../models/Game';
import { spliceRandom } from "../utils";
import { MatSnackBar } from '@angular/material';
import { DictionaryService } from "../dictionary.service";

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.scss']
})
export class GoComponent implements OnInit {
  model: any = {answer: ''};
  current: any = {};
  game: Game;
  isActive: boolean = true;

  constructor(private dictionaryService: DictionaryService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.play();
  }

  next() {
    this.game.saveAnswer(this.model.answer);

    const message = this.game.checkCurrentAnswer() ? 'You\'re right' : `Not really. The right answer is "${this.current.rightAnswer}"`;
    this.snackBar.open(message, null, {duration: 3000});

    const nextQuestion = this.game.next();
    if (nextQuestion.done) {
        this.isActive = false;
        this.current = {};
    } else {
        this.current = nextQuestion.value;
    }
  }

  play() {
      this.game = new Game(this.dictionaryService.getRandom(3));
      this.current = this.game.next().value;
      this.isActive = true;
  }
}
