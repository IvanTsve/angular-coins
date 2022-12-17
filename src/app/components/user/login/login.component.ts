import { Component, Output, EventEmitter } from '@angular/core';
import { ILoginUser } from 'src/app/interfaces/loginUser';
import { IUser } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../app.component.scss']
})
export class LoginComponent {

  user: IUser;
  err: any;

  constructor(private UsersService: UsersService, private router: Router) { }


  loginHandler(loginForm: ILoginUser) {
    const me = this;

    return this.UsersService.login().subscribe({
      next(data) {
        if (data) {
          let users = Object.entries(data);
          let user = users.filter((x: any) => x[1]['email'] == loginForm?.email && x[1]['password'] == loginForm?.password)[0];
          let userData: any = {};
          if (user) {
            let d: any = user[1];
            userData['id'] = user[0];
            userData['username'] = d['username'];
            userData['news'] = d['news'] ? d['news'] : [];
            userData['coins'] = d['coins'] ? d['coins'] : [];
            userData['status'] = 'success';
            userData['msg'] = 'successfully logged in';
            me.UsersService.user = userData;
            localStorage.setItem('uc', userData['id']);
            me.router.navigate(['/']);
            setTimeout(() => {
              userData['msg'] = null;
            }, 2000);
          } else {

            userData['status'] = 'error';
            userData['msg'] = 'whrong email or password';
            me.err = userData;
          }
        }
        // return me.user;
      },
      error(err) {
        me.err = err;
      }

    });



  }

}
