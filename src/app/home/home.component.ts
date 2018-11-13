import { Component, OnInit } from '@angular/core';


import {DogList} from '../_interfaces/dog-list';
import { DogListService } from '../_services/dog-list.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //variavel que recebe os dogs
  public dogList: DogList[];

  public title:string = "The Dog Finder";
  public subTitle:string = "Everything about your pet";

  constructor(
  private DogListService: DogListService
  ) { }

  ngOnInit() {
    //DogList - consumindo o serviço
    this.DogListService.getDogs().subscribe(
      resposta =>{
        this.dogList = resposta
        console.log(resposta);
      }
    );
  }


  getUrl(){
    return "url('./assets/images/dog-finder-banner.jpg')";
  }

}
