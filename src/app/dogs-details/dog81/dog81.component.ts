import { Component, OnInit } from '@angular/core';

import { DogDetails } from "../../_interfaces/dog-details";
import { Dog81Service } from "../../_services/dog81.service";

@Component({
  selector: 'app-dog81',
  templateUrl: './dog81.component.html',
  styleUrls: ['./dog81.component.scss']
})
export class Dog81Component implements OnInit {

  public dog81: DogDetails[];
  constructor(
    private DogService: Dog81Service
  ) { }

  ngOnInit() {
    this.DogService.getDogDetails_81()
    .subscribe( res => {this.dog81 = res; console.log(res)} );
  }

  getUrl(){
    return "url('../../../assets/images/81.jpg')";
  }

}
