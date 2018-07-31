import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
  private KEY = 'trnsl.1.1.20180701T094450Z.8549859dd14fd7d0.1e2ccec802ab972ae99fa4e59a49ae4dca2915c4';
  private lang = 'en-ru';

  constructor() {}

  translate(text) {
    return fetch(`${this.URL}?key=${this.KEY}&text=${encodeURIComponent(text)}&lang=${this.lang}`)
        .then(res => res.json());
  }
}
