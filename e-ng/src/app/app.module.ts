import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatListModule, MatSelectModule, MatSnackBarModule, MatTabsModule, MatTooltipModule} from "@angular/material";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RecentComponent } from './recent/recent.component';
import { GoComponent } from './go/go.component';
import { SettingsComponent } from './settings/settings.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { AddWordComponent } from './add-word/add-word.component';

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
    BrowserModule,
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
export class AppModule { }
