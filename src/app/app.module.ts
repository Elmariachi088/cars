import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FAQComponent } from './faq/faq.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    FAQComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
