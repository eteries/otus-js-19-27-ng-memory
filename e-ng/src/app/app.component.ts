import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'e-ng-memory';
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
