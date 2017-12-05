import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatDialogModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import { MatSnackBar } from '@angular/material';
import { MatSnackBarModule } from '@angular/material/snack-bar';

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
    BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatCardModule, MatButtonModule, MatDialogModule, MatInputModule, FormsModule, HttpClientModule, MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    MatSnackBarModule
  ],
  entryComponents: [
    NotificationDialogComponent
  ],
  providers: [
    PushApiService,
    AngularFireDatabase,
    MatSnackBar
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
