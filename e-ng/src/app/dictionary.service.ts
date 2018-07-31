import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import { WordUnit } from './models/WordUnit';
import { spliceRandom } from './utils';
import { Subject } from 'rxjs'
import { isPlatformBrowser } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private wordAdded = new Subject<string>();
  wordAdded$ = this.wordAdded.asObservable();

  private dict: WordUnit[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId) {
      if (isPlatformBrowser(platformId)) {
          const stored = localStorage.getItem('dict');
          this.dict = stored ? JSON.parse(stored) : [];
      } else
          this.dict = [];
  }

  add(word: WordUnit) {
    if(this.dict.push(word)) {
        this.wordAdded.next(word.original);
        this.save();
        return true;
    }
  }

  getRecent(quantity: number): WordUnit[] {
      return this.dict.slice(-quantity);
  }

  getAll(): WordUnit[] {
      return this.dict.slice();
  }

  getRandom(quantity: number) {
      return spliceRandom(this.dict, quantity);
  }

  private save() {
      localStorage.setItem('dict', JSON.stringify(this.dict));
  }

  get length() {
      return this.dict.length;
  }
}
