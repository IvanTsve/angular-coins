import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment,paths } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private HttpClient: HttpClient) { }

  loadAll() {

    let headerDict = {
      'User-Agent': 'request'
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    

    return this.HttpClient.get<any>(`${paths.news}${environment.api}`,requestOptions)
  }
}
