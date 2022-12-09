import { Component, OnInit } from '@angular/core';
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

  user: IUser | null = null;
  err: any;

  constructor(private UsersService: UsersService, private router: Router) { }


  async loginHandler(loginForm: ILoginUser) {

    let user = await this.UsersService.login(loginForm);

    if (user.status == "success") {
      this.router.navigate(['/user/portfolio'])
      return this.user = user;
    } else {
      setTimeout(() => {
        this.err = null;
      }, 5000);
      return this.err = user;
    }

  }

}
