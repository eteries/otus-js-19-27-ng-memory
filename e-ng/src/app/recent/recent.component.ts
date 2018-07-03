import { Component, OnInit } from '@angular/core';
import { WordUnit } from '../models/WordUnit';
import { DICT } from '../mock-dict';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  recent: WordUnit[] = [];
  groupedRecent: any = {};
  getKeys = Object.keys;

  ngOnInit() {
      this.recent = RecentComponent.getRecent(7);
      this.groupRecentByDate(this.recent);
  }

  static getRecent(quantity: number): WordUnit[] {
      return DICT.slice(-quantity);
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
