import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DogDetails } from "../_interfaces/dog-details";
import { DogDetailsService } from "../_services/dog-details.service";
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-dogs-details',
  templateUrl: './dogs-details.component.html',
  styleUrls: ['./dogs-details.component.scss']
})
export class DogsDetailsComponent implements OnInit {

  public dogsDetails: DogDetails[];

  constructor(
    private http: HttpClient,
    private DogDetailsService: DogDetailsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.DogDetailsService.getDogDetails_6()
    .subscribe( res => {this.dogsDetails = res; console.log(res)} );

    this.DogDetailsService.getDogDetails_16()
    .subscribe( res => {this.dogsDetails = res; console.log(res)} );


  }

}
