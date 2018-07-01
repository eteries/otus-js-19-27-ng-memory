import {Component, Input, OnInit} from '@angular/core';
import { WordUnit } from '../models/WordUnit';
import { DICT } from '../mock-dict';
import { TranslateService } from "../translate.service";
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'dictionary-view',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss']
})
export class DictionaryComponent implements OnInit {

  @Input()
      set recentNum(recentNum: number) {
      if(Number.isInteger(recentNum)) {
          this._recentNum = recentNum;
      }
    }

  get recentNum() {
    return this._recentNum;
  }

  recentWordsList: WordUnit[] = [];
  groupedRecent: any = {};
  getKeys = Object.keys;
  allWordsList: WordUnit[] = [];
  private _recentNum = 0;

  constructor(public translateService: TranslateService, private snackBar: MatSnackBar) {
    /**/}

    ngOnInit() {
        if(this.recentNum) {
            this.recentWordsList = DictionaryComponent.getRecent(this.recentNum);
            this.groupRecentByDate(this.recentWordsList);
        } else {
            this.allWordsList = DICT;
        }
    }

    static getRecent(quantity: number): WordUnit[] {
        return DICT.slice(-quantity);
    }

    askYandex(word: string) {
        this.translateService.translate(word)
            .then(result => this.snackBar.open('Yandex.translate: ' + result.text, null, {duration: 3000}))
            .catch(error => this.snackBar.open('Connection Error', null, {duration: 3000}));
    }

    private groupRecentByDate(recent: WordUnit[]) {
        this.groupedRecent = recent.reduce((res, word) => {
            const dateStr = word.date.toDateString();
            if(!res[dateStr]) res[dateStr] = [];
            res[dateStr].push(word);
            return res;
        },{} as any);
    }
}
