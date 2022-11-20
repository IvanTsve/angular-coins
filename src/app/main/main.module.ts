import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyComponent } from "../components/currency/currency.component";
import { NewsComponent } from "../components/news/news.component";



@NgModule({
  declarations: [
    CurrencyComponent,
    NewsComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CurrencyComponent,
    NewsComponent
  ]
})
export class MainModule { }
