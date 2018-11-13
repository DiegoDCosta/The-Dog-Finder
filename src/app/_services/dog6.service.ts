import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Dog6Service {

  private url_6 = './assets/json/breed/6.json';

  constructor(
    private http: HttpClient
  ) { }

  getDogDetails_6():Observable<any>{
    return this.http.get(this.url_6)
  }
}
