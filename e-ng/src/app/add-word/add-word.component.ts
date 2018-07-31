import { Component, OnInit } from '@angular/core';
import { WordUnit } from "../models/WordUnit";
import { generateId } from "../utils"
import { DictionaryService } from "../dictionary.service";
import { TranslateService } from "../translate.service";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: 'add-word',
  templateUrl: './add-word.component.html',
  styleUrls: ['./add-word.component.scss']
})
export class AddWordComponent {
  model = {} as WordUnit;
  isFormOpen:boolean = false;

  constructor(private dictionaryService: DictionaryService, private translateService: TranslateService, private snackBar: MatSnackBar) { }

  addNew() {
      this.isFormOpen = true;
      this.model = new WordUnit(generateId(), new Date().toDateString(), '', '');
  }

  translate(word: string) {
    this.translateService.translate(word)
        .then(result => this.model.translation = result.text[0]);
  }

  onSubmit() {
      this.isFormOpen = false;
      if (this.dictionaryService.add(this.model)) {
        this.snackBar.open(`The word "${this.model.original}" has been added to your dictionary`, null, {duration: 2000});
      }
  }
}
