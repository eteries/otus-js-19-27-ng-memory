import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { MatButtonModule, MatInputModule, MatListModule, MatSelectModule, MatSnackBarModule, MatTabsModule, MatTooltipModule} from "@angular/material";
import { RouterModule, Routes } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { AppComponent } from './app.component';
import { RecentComponent } from './dictionary/recent/recent.component';
import { GoComponent } from './game/go/go.component';
import { SettingsComponent } from './settings/settings.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { AddWordComponent } from './dictionary/add-word/add-word.component';
import { APP_TITLE } from './shared/constants';

const routes: Routes = [
    {path: 'settings', component: SettingsComponent},
    {path: 'go', component: GoComponent},
    {path: '', component: RecentComponent}
    ];

@NgModule({
  declarations: [
    AppComponent,
    RecentComponent,
    GoComponent,
    SettingsComponent,
    DictionaryComponent,
    AddWordComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: APP_TITLE }),
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatListModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTooltipModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(APP_ID) private appId: string) {
      const platform = isPlatformBrowser(platformId) ?
          'in the browser' : 'on the server';
      console.log(`Running ${platform} with appId=${appId}`);
  }
}
