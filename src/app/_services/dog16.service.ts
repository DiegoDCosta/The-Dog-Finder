import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Dog16Service {

  private url_16 = './json/breed/16.json';

  constructor(
    private http: HttpClient
  ) { }

  getDogDetails_16():Observable<any>{
    return this.http.get(this.url_16)
  }
}
