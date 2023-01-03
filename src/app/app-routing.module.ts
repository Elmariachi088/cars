import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FAQComponent } from './faq/faq.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path: "", component:HomePageComponent},
  {path: "faq", component:FAQComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

