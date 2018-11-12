import { Component, OnInit } from '@angular/core';

import { DogDetails } from "../../_interfaces/dog-details";
import { Dog121Service } from "../../_services/dog121.service";

@Component({
  selector: 'app-dog81',
  templateUrl: './dog121.component.html',
  styleUrls: ['./dog121.component.scss']
})
export class Dog121Component implements OnInit {

  public dog121: DogDetails[];
  constructor(
    private DogService: Dog121Service
  ) { }

  ngOnInit() {
    this.DogService.getDogDetails_121()
    .subscribe( res => {this.dog121 = res; console.log(res)} );
  }

  getUrl(){
    return "url('../../../assets/images/121.jpg')";
  }

}
