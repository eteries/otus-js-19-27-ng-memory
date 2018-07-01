import { Component, OnInit } from '@angular/core';
import { WordUnit } from '../models/WordUnit';
import { DICT } from '../mock-dict';
import { DictionaryComponent } from "../dictionary/dictionary.component";

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }
}
