import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HomeComponent } from './home/home.component';
import { Error404Component } from './error404/error404.component';


const appRoutes: Routes = [
  // aqui vão as rotas (links de navegação)
  {
     path: '',
     component: HomeComponent
  },
  { path: '**', component: Error404Component },
  //{ path: '**', redirectTo: '' },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
