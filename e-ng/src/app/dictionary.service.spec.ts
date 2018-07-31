import { TestBed, inject } from '@angular/core/testing';

import { DictionaryService } from './dictionary.service';
import { WordUnit } from './models/WordUnit';

describe('DictionaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DictionaryService]
    });
  });

  it('should be created', inject([DictionaryService], (service: DictionaryService) => {
    expect(service).toBeTruthy();
  }));

  it('should have length getter', inject([DictionaryService], (service: DictionaryService) => {
      expect(service.length).toEqual(jasmine.any(Number));
  }));

  it('should add words', inject([DictionaryService], (service: DictionaryService) => {
    const length = service.length;
    service.add(new WordUnit('1', new Date().toDateString(), '', ''));
    expect(service.length).toEqual(length + 1);
  }));
});
