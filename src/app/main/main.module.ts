import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyComponent } from "../components/currency/currency.component";
import { NewsComponent } from "../components/news/news.component";
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    CurrencyComponent,
    NewsComponent,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
  ],
  exports: [
    CurrencyComponent,
    NewsComponent
  ]
})
export class MainModule { 

}
