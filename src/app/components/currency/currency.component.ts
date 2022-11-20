import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ICrypto } from "../../interfaces/crypto";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  cryptos: ICrypto[] | null = null;

  constructor(private ApiService:ApiService) { }

  ngOnInit(): void {
    const me = this;
    // this.ApiService.getCryptoALl().subscribe({
    //   next(value) {
    //     me.cryptos = value;
    //     console.log(value);
    //   },
    //   error(err) {
    //     console.log(err);
        
    //   }
    // })
  }

}
