import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';


import { MainModule } from "./main/main.module";
import { NewsComponent } from './components/news/news.component';
import { CurrencyComponent } from './components/currency/currency.component';
// import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    MainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
