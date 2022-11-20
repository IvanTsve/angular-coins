import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment,paths } from "../../environments/environment";
import { ICrypto } from "../interfaces/crypto";
import { INews } from "../interfaces/new";

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
    return this.HttpClient.get<ICrypto[]>(`${paths.cryptos}`,this.requestOptionsCrypto)

  }
}
