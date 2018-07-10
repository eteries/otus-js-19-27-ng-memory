import { TestBed, inject } from '@angular/core/testing';

import { RandomizeService } from './randomize.service';

describe('RandomizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomizeService]
    });
  });

  it('should be created', inject([RandomizeService], (service: RandomizeService) => {
    expect(service).toBeTruthy();
  }));
});
