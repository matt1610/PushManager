import { Component, Inject } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { NotificationDialogComponent } from '../app/notification-dialog/notification-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public dialog: MatDialog) {

  }

  public NewNotification() {
    let dialogRef = this.dialog.open(NotificationDialogComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }



}
