import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
  private KEY = '';
  private lang = 'en-ru';

  constructor() {}

  translate(text) {
    return fetch(`${this.URL}?key=${this.KEY}&text=${encodeURIComponent(text)}&lang=${this.lang}`)
        .then(res => res.json());
  }

  isKeyMissing() : boolean {
    return !this.KEY;
  }
}
