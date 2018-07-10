import { Injectable } from '@angular/core';
import { WordUnit } from './WordUnit';
import { RandomizeService } from "../shared/randomize.service";
import { Subject } from 'rxjs'
import { StorageService } from '../shared/storage.service';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private wordAdded = new Subject<string>();
  wordAdded$ = this.wordAdded.asObservable();

  private dict: WordUnit[] = [];

  constructor(private randomizeService: RandomizeService, private storageService: StorageService) {
      this.dict = storageService.load();
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
      return this.randomizeService.spliceRandom(this.dict, quantity);
  }

  private save() {
      this.storageService.save(this.dict);
  }

  get length() {
      return this.dict.length;
  }
}
