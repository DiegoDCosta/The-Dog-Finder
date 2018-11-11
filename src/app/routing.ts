import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';
import { DogsDetailsComponent } from './dogs-details/dogs-details.component';


const appRoutes: Routes = [
  {
     path: '',
     component: HomeComponent
  },
  {
    path: 'dog-details',
    component: DogsDetailsComponent,
  },
  { path: '**', component: Error404Component },
  //{ path: '**', redirectTo: '' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
