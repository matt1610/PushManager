import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatDialogModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NotificationDialogComponent } from './notification-dialog/notification-dialog.component';
import { PushApiService } from './push-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NotificationDialogComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatButtonModule, MatDialogModule, MatInputModule, FormsModule, HttpClientModule, MatProgressSpinnerModule
  ],
  entryComponents: [
    NotificationDialogComponent
  ],
  providers: [
    PushApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
