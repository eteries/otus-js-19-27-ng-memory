import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AddWordComponent } from './add-word.component';
import { MatInputModule, MatSnackBarModule } from "@angular/material";
import { AppComponent } from '../../app.component';

describe('AddWordComponent', () => {
  let component: AddWordComponent;
  let fixture: ComponentFixture<AddWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWordComponent ],
      imports: [
          BrowserAnimationsModule,
          FormsModule,
          MatInputModule,
          MatSnackBarModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render form on init', async(() => {
    const fixture = TestBed.createComponent(AddWordComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('form').hasAttribute('hidden')).toBe(true);
  }));

  it('should render form after click', async(() => {
    const fixture = TestBed.createComponent(AddWordComponent);
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('.actions button').click();
    fixture.detectChanges();
    expect(compiled.querySelector('form').hasAttribute('hidden')).toBe(false);
  }));
});
