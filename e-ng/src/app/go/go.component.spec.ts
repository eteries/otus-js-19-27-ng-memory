import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoComponent } from './go.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('GoComponent', () => {
  let component: GoComponent;
  let fixture: ComponentFixture<GoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoComponent ],
      imports: [ BrowserAnimationsModule, FormsModule, MatInputModule, MatSnackBarModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
