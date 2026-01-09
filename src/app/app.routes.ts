import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Страницы
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Оптима Сервис - Сервисный центр в Ростове-на-Дону'
  },
  {
    path: 'about-us',
    component: AboutComponent,
    title: 'О нас - Оптима Сервис'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }