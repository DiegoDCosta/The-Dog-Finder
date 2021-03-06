
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Dog81Service {

  private url_81 = './assets/json/breed/81.json';

  constructor(
    private http: HttpClient
  ) { }

  getDogDetails_81():Observable<any>{
    return this.http.get(this.url_81)
  }
}
