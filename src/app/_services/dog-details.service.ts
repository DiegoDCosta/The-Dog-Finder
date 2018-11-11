import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DogDetails } from "../_interfaces/dog-details";

@Injectable({
  providedIn: 'root'
})
export class DogDetailsService {

  private url_6 = '../src/json/breed/6.json';
  private url_16 = '../src/json/breed/16.json';
  private url_81 = '../src/json/breed/81.json';
  private url_121 = '../src/json/breed/121.json';


  constructor(
    private http: HttpClient
  ) { }

  getDogDetails_6():Observable<any>{
    return this.http.get(this.url_6)
  }

  getDogDetails_16():Observable<any>{
    return this.http.get(this.url_16)
  }
}
