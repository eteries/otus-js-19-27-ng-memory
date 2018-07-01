import { Component, OnInit } from '@angular/core';
import { DictionaryService } from "../dictionary.service";

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent {
  isEmpty: boolean = !this.dictionaryService.length;

  constructor(private dictionaryService: DictionaryService) {
      dictionaryService.wordAdded$.subscribe(() => !this.dictionaryService.length);
  }
}
