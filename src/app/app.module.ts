import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';

import { HttpClientModule } from "@angular/common/http";
// import { NewsComponent } from './components/news/news.component';
// import { CurrencyComponent } from './components/currency/currency.component';

import { MainModule } from "./main/main.module";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
