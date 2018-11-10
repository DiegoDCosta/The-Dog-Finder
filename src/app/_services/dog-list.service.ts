import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogListService {

  url:string = '../../../src/json/breeds.json';

  constructor( public http: HttpClient ) {}

  //lista de caes
  getDogs(): Observable<any> {
    return this.http.get(this.url)
  }
}
