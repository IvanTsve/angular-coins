import { Component, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from './interfaces/user';
import { UsersService } from "./services/users.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  user: any;
  constructor(private UsersService: UsersService) {
  }

  ngOnInit() {
    let uid = localStorage.getItem('uc');
    const me = this;

    if (uid) {

      this.UsersService.getProfile(uid).subscribe((u: any) => {
        me.UsersService.user = {
          'id': uid ? uid : '',
          'username': u['username'],
          'news': u.news ? u.news : [],
          'coins': u.coins ? u.coins : [],
          'status': 'success',
          'msg': u.msg ? u.msg : null,
        };
      });

    }


  }
  title = 'coins';
}
