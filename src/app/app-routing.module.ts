import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './component/book/book.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { LoginComponent } from './component/login/login.component';


const routes: Routes = [
  {path: '',redirectTo: '/home-Page', pathMatch:'full'},
  {path: 'home-page' , component: HomePageComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'book', component: BookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
