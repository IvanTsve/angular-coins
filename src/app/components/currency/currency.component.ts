import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ICrypto } from "../../interfaces/crypto";
import { Router } from "@angular/router";
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  cryptos: ICrypto[] | null = null;
  // cryptos: any;

  watchCoin(id: any) {
    this.router.navigate([`coins/details/${id}`])


  }
  constructor(private ApiService: ApiService,private router: Router) { }


  ngOnInit(): void {
    const me = this;

    this.ApiService.getCryptoALl().subscribe({
      next(value) {
        me.cryptos = value['data']['coins'];
      },
      error(err) {

      }
    })
  }


}


