import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';
import { Dog6Component } from './dogs-details/dog6/dog6.component';
import { Dog16Component } from './dogs-details/dog16/dog16.component';
import { Dog81Component } from './dogs-details/dog81/dog81.component';
import { Dog121Component } from './dogs-details/dog121/dog121.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: '6', component: Dog6Component},
  {path: '16', component: Dog16Component},
  {path: '81', component: Dog81Component},
  {path: '121', component: Dog121Component},
  { path: '**', redirectTo: '' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
