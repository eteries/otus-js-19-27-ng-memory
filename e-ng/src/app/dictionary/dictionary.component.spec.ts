import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryComponent } from './dictionary.component';
import { MatListModule, MatSnackBarModule } from '@angular/material';

describe('DictionaryComponent', () => {
  let component: DictionaryComponent;
  let fixture: ComponentFixture<DictionaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryComponent ],
      imports: [ MatListModule, MatSnackBarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
