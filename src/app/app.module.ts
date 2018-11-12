import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './routing';
import { Dog6Component } from './dogs-details/dog6/dog6.component';
import { Dog16Component } from './dogs-details/dog16/dog16.component';
import { Dog81Component } from './dogs-details/dog81/dog81.component';
import { Dog121Component } from './dogs-details/dog121/dog121.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Dog6Component,
    Dog16Component,
    Dog81Component,
    Dog121Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
