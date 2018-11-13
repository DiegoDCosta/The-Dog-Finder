import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Dog121Service {

  private url_121 = './assets/json/breed/121.json';

  constructor(
    private http: HttpClient
  ) { }

  getDogDetails_121():Observable<any>{
    return this.http.get(this.url_121)
  }
}
