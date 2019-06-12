import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_TITLE } from './shared/constants';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
        imports: [
            RouterTestingModule,
            MatTabsModule
        ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title ${APP_TITLE}`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual(APP_TITLE);
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(APP_TITLE);
  }));
});
