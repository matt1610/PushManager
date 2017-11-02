import { Injectable } from '@angular/core';

import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class PushApiService {

  constructor(public http: HttpClient) { }

  public SendPushNotification(pushRequest: any): Observable<any> {
    // let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    // let headers = new Headers();
    // headers.append('Content-Type', 'application/json');
    //{'Content-Type': 'application/json'}

    let options = new RequestOptions({
      headers: headers
    });
    console.log(pushRequest);
    return this.http.post("https://voltexpush.azurewebsites.net/api/SendPushNotification?code=v8b3OkArRsxdZuqzHE9qdysufaInFn4r1ga15AGkEhS4jn8Dp7SfTA==",
    // return this.http.post("https://requestb.in/1jybe041",
      pushRequest, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      });
  }


}
