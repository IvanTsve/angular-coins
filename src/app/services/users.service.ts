import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { paths } from "../../environments/environment";
import { IRegisterUser } from '../interfaces/registerUser';
import { ILoginUser } from '../interfaces/loginUser';



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  userData: any = {};
  register(body: IRegisterUser) {

    return this.http.post(`${paths.database}/users.json`, body);
  }
  async login(body?: ILoginUser) {
    const me = this;
    this.userData = {};
    try {

      const resp = await fetch(`${paths.database}/users.json`);
      const data = await resp.json();

      if (data) {
        let users = Object.entries(data);
        let user = users.filter((x: any) => x[1]['email'] == body?.email && x[1]['password'] == body?.password)[0];
        if (user) {
          let d: any = user[1];

          me.userData['id'] = user[0].toString();
          me.userData['username'] = d['username'];
          me.userData['news'] = [];
          me.userData['coins'] = [];
          me.userData['status'] = 'success';
          me.userData['msg'] = 'successfully logged in';
        } else {
          me.userData['status'] = 'error';
          me.userData['msg'] = 'No such user';
        }
        return me.userData;
      }

    } catch (err) {
      me.userData['status'] = '404'
      me.userData['msg'] = 'not found'
      return me.userData;
    }

  }
}
