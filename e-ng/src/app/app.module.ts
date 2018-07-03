import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule, MatListModule, MatSelectModule, MatSnackBarModule, MatTabsModule} from "@angular/material";
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RecentComponent } from './recent/recent.component';
import { GoComponent } from './go/go.component';
import { SettingsComponent } from './settings/settings.component';

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
    SettingsComponent
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
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
