import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment,paths } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  requestOptionsNews = {                                                                                                                                                                                 
    headers: new HttpHeaders({'User-Agent': 'request'}), 
  };
  requestOptionsCrypto = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': environment.cryptoKey,
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  constructor(private HttpClient: HttpClient) { }


  loadNews() {
    return this.HttpClient.get<any>(`${paths.news}${environment.stockNewsKey}`,this.requestOptionsNews);
  }

  
  getCryptoALl() {
    let cryptos = this.HttpClient.get<any>(`${paths.cryptos}`,this.requestOptionsCrypto);
    return cryptos;
  }

  getSingleCoin(id:string) {
    return this.HttpClient.get<any>(`${paths.coin}/${id}`, this.requestOptionsCrypto);
  }
  

}

