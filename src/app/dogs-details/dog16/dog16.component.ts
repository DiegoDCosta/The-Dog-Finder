import { Component, OnInit } from '@angular/core';

import { DogDetails } from "../../_interfaces/dog-details";
import { Dog16Service } from "../../_services/dog16.service";


@Component({
  selector: 'app-dog16',
  templateUrl: './dog16.component.html',
  styleUrls: ['./dog16.component.scss']
})
export class Dog16Component implements OnInit {

  public dog16: DogDetails[];

  constructor(
    private DogService: Dog16Service
  ) { }

  ngOnInit() {
    this.DogService.getDogDetails_16()
    .subscribe( res => {this.dog16 = res; console.log(res)} );
  }

  getUrl(){
    return "url('./assets/images/16.jpg')";
  }

}
