import { Component, OnInit } from '@angular/core';
import { MatInputModule, MatProgressSpinnerModule } from '@angular/material';

import { PushApiService } from '../push-api.service';

@Component({
  selector: 'app-notification-dialog',
  templateUrl: './notification-dialog.component.html',
  styleUrls: ['./notification-dialog.component.css']
})
export class NotificationDialogComponent implements OnInit {

  public pushRequest: any = {};

  constructor(public apiService: PushApiService) { }

  //Njc0NjEyZmMtNzVkNy00MTYyLTlmYzAtMGY4M2ZlMGZkMzVh
  //d58a8dcf-9cc5-4295-84d5-3ba843bc2330

  ngOnInit() {
  }

  public SendNotification(): void {
    this.apiService.SendPushNotification(
      this.pushRequest
    ).subscribe(res => {
      console.log(res);
    })
  }

}
