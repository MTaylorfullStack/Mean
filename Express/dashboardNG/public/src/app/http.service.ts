import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// tslint:disable: variable-name
// tslint:disable: prefer-const
// tslint:disable: one-line

@Injectable({
  providedIn: 'root'
})
export class HttpService
{
  constructor(private _http: HttpClient) {
    this.getCats();
   }

  getCats()
  {
    let tempObservable = this._http.get('/cats');
    tempObservable.subscribe(data => console.log('Got our Cats!', data));
  }
}
