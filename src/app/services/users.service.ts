import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from "../../environments/environment";
import { IRegisterUser } from '../interfaces/registerUser';
import { ICrypto } from '../interfaces/crypto';
import { IUser } from '../interfaces/user';


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

  saveCoin(coin: ICrypto) {
    return this.http.post(`${paths.database}/coins`, coin);
  }

  getProfile(id: any) {
    return this.http.get(`${paths.database}/users/${id}.json`);
  }
}
