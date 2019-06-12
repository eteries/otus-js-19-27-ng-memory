import { Component, OnInit } from '@angular/core';
import { WordUnit } from "../WordUnit";
import { DictionaryService } from "../dictionary.service";
import { TranslateService } from "../../shared/translate.service";
import { RandomizeService } from "../../shared/randomize.service";
import { MatSnackBar } from "@angular/material";
import { Messages } from '../../shared/constants'

@Component({
  selector: 'add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent {
  model = {} as WordUnit;
  isFormOpen:boolean = false;

  constructor(private dictionaryService: DictionaryService, private randomizeService: RandomizeService, private translateService: TranslateService, private snackBar: MatSnackBar) { }

  addNew() {
      this.isFormOpen = true;
      this.model = new WordUnit(this.randomizeService.generateId(), new Date().toDateString(), '', '');
  }

  translate(word: string) {
    this.translateService.translate(word)
        .then(result => this.model.translation = result.text[0]);
  }

  onSubmit() {
      this.isFormOpen = false;
      if (this.dictionaryService.add(this.model)) {
        this.snackBar.open(Messages.WORD_ADDED_L + this.model.original + Messages.WORD_ADDED_R, null, {duration: 2000});
      }
  }
}
