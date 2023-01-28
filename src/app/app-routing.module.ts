import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { FAQComponent } from './faq/faq.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ItemComponent } from './item/item.component';


const routes: Routes = [
  {path: "", component:HomePageComponent},
  {path: "faq", component:FAQComponent},
  {path: "cars", component:CarsComponent},
  {path: "form", component:ItemComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

