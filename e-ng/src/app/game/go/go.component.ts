import { Component, OnInit } from '@angular/core';
import { Game } from '../Game';
import { MatSnackBar } from '@angular/material';
import { DictionaryService } from "../../dictionary/dictionary.service";
import { Messages } from '../../shared/constants'

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

    const message = this.game.checkCurrentAnswer() ?
        Messages.RIGHT_ANSWER :
        Messages.WRONG_ANSWER + this.current.rightAnswer;
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
