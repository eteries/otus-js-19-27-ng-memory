import { Component, Input, OnInit} from '@angular/core';
import { WordUnit } from './WordUnit';
import { DictionaryService } from "./dictionary.service";
import { TranslateService } from "../shared/translate.service";
import { MatSnackBar } from '@angular/material';
import { Messages } from '../shared/constants';

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
        if (this.translateService.isKeyMissing()) {
            this.snackBar.open(Messages.MISSING_KEY, null, {duration: 5000})
        }
    }

    askYandex(word: string) {
        this.translateService.translate(word)
            .then(result => {
                if(result.text) {
                    this.snackBar.open(Messages.TRANSLATE_RESULT + result.text, null, {duration: 3000})
                } else throw Error(Messages.TRANSLATE_ERROR);
            })
            .catch(error => this.snackBar.open(Messages.TRANSLATE_ERROR, null, {duration: 3000}));
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
