import { Component, OnInit } from '@angular/core';
import { MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

import { MatSnackBar } from '@angular/material';

import { PushApiService } from '../push-api.service';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.css']
})
export class NotificationDialogComponent implements OnInit {

  public pushRequest: any = {};
  items: Observable<any[]>;
  itemsRef: AngularFireList<any>;
  userDoc: any;

  constructor(public apiService: PushApiService, public db: AngularFireDatabase, public snackBar: MatSnackBar) {
    // this.itemsRef = db.list('06d7f695-fc47-4b67-bd1c-9f8a056ef33f/notifications');
    this.items = db.list('06d7f695-fc47-4b67-bd1c-9f8a056ef33f/notifications').valueChanges();
    console.log(this.items);
  }

  //Njc0NjEyZmMtNzVkNy00MTYyLTlmYzAtMGY4M2ZlMGZkMzVh
  //d58a8dcf-9cc5-4295-84d5-3ba843bc2330

  ngOnInit() {

  }

  public SendNotification(): void {
    console.log(this.pushRequest);
    this.apiService.SendPushNotification(
      this.pushRequest
    ).subscribe(res => {

      let response = JSON.parse(res);

      if (response.errors) {

      } else {

        this.snackBar.open('Message Sent', 'Ok', {
          duration: 3000
        });

        this.itemsRef = this.db.list(`${this.pushRequest.appId}/notifications`);

        this.itemsRef.push({
          title: this.pushRequest.title,
          subtitle: this.pushRequest.subtitle,
          body: this.pushRequest.body,
          date: new Date().toDateString()
        });
        console.log(res);

      }



    });
  }

}
