import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(@Inject(PLATFORM_ID) private platformId) { }

  load() {
      if (isPlatformBrowser(this.platformId)) {
          const stored = localStorage.getItem('dict');
          return stored ? JSON.parse(stored) : [];
      } else return [];
  }

  save(dict) {
      if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('dict', JSON.stringify(dict));
      }
  }
}
