import {Component, Input, OnInit} from '@angular/core';
import { WordUnit } from '../models/WordUnit';
import { DictionaryService } from "../dictionary.service";
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

    constructor(public dictionaryService: DictionaryService, public translateService: TranslateService, private snackBar: MatSnackBar) {
      dictionaryService.wordAdded$.subscribe(() => this.getWords());
    }

    ngOnInit() {
        this.getWords();
    }

    askYandex(word: string) {
        this.translateService.translate(word)
            .then(result => this.snackBar.open('Yandex.translate: ' + result.text, null, {duration: 3000}))
            .catch(error => this.snackBar.open('Connection Error', null, {duration: 3000}));
    }

    private getWords() {
        if(this.recentNum) {
            this.recentWordsList = this.dictionaryService.getRecent(this.recentNum);
            this.groupRecentByDate(this.recentWordsList);
        } else {
            this.dictionaryService.getAll();
        }
    }

    private groupRecentByDate(recent: WordUnit[]) {
        this.groupedRecent = recent.reduce((res, word) => {
            const dateStr = word.date;
            if(!res[dateStr]) res[dateStr] = [];
            res[dateStr].push(word);
            return res;
        },{} as any);
    }
}
