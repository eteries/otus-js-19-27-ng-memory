import { Component } from '@angular/core';
import { APP_TITLE } from './shared/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = APP_TITLE;
  links = [
      {
        path: '',
        label: 'Recently Added'
      },
      {
        path: 'go',
        label: 'Go'
      },
      {
        path: 'settings',
        label: 'Settings'
      }
  ];
}
