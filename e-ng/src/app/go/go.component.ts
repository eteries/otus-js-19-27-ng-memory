import { Component, OnInit } from '@angular/core';
import { Game } from '../models/Game';
import { DICT } from '../mock-dict';
import { spliceRandom } from "../utils";
import { MatSnackBar } from '@angular/material';

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

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.play()
  }

  next() {
    this.game.saveAnswer(this.model.answer);

    const message = this.game.checkCurrentAnswer() ? 'You\'re right' : 'Not really';
    this.snackBar.open(message, null, {duration: 2000});

    const nextQuestion = this.game.next();
    if (nextQuestion.done) {
        this.isActive = false;
        this.current = {};
    } else {
        this.current = nextQuestion.value;
    }
  }

  play() {
      this.game = new Game(spliceRandom(DICT, 3));
      this.current = this.game.next().value;
      this.isActive = true;
  }
}
