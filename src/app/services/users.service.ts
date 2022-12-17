import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from "../../environments/environment";
import { IRegisterUser } from '../interfaces/registerUser';
import { ICrypto } from '../interfaces/crypto';
import { IUser } from '../interfaces/user';
import { INews } from '../interfaces/new';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  user: IUser | null = null;

  get loggedIn() {
    return this.user != null;

  }

  register(body: IRegisterUser) {

    return this.http.post(`${paths.database}/users.json`, body);
  }
  login() {
    return this.http.get(`${paths.database}/users.json`);
  }

  saveCoin(coin: any,id:any) {
    return this.http.patch(`${paths.database}/users/${id}/coins.json`, {...coin});
  }
  saveNews(news: any,id:any) {
    
    return this.http.patch(`${paths.database}/users/${id}/news/.json`, {...news});
    // return this.http.patch(`${paths.database}/users/${news.userId}/news.json`, {news});
  }

  getProfile(id: any) {
    return this.http.get(`${paths.database}/users/${id}.json`);
  }

  registrationCheck() {
    return this.http.get(`${paths.database}/users.json`);
  }
}
