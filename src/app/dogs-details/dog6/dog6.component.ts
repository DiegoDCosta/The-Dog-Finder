import { Component, OnInit } from '@angular/core';

import { DogDetails } from "../../_interfaces/dog-details";
import { Dog6Service } from "../../_services/dog6.service";


@Component({
  selector: 'app-dog6',
  templateUrl: './dog6.component.html',
  styleUrls: ['./dog6.component.scss']
})
export class Dog6Component implements OnInit {


  public dog6: DogDetails[];
  constructor(
    private DogService: Dog6Service
  ) { }

  ngOnInit() {
    this.DogService.getDogDetails_6()
    .subscribe( res => {this.dog6 = res; console.log(res)} );
  }

  getUrl(){
    return "url('../../../assets/images/6.jpg')";
  }
}
