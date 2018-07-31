import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentComponent } from './recent.component';
import { DictionaryComponent } from '../dictionary/dictionary.component';
import { AddWordComponent } from '../add-word/add-word.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatListModule, MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RecentComponent', () => {
  let component: RecentComponent;
  let fixture: ComponentFixture<RecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentComponent, AddWordComponent, DictionaryComponent ],
      imports: [ BrowserAnimationsModule, FormsModule, MatInputModule, MatListModule, MatSnackBarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
