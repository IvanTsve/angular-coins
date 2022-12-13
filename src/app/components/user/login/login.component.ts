import { Component, Output,EventEmitter } from '@angular/core';
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

  @Output() user: any  = new EventEmitter <IUser>;

  // user: IUser | null = null;
  err: any;

  constructor(private UsersService: UsersService, private router: Router) { }


  async loginHandler(loginForm: ILoginUser) {

    let user = await this.UsersService.login(loginForm);


    console.log(user);
    
    if (user.status == "success") {
      this.user.emit(user);
      this.router.navigate(['/user/portfolio'])
    } else {
      setTimeout(() => {
        this.err = null;
      }, 5000);
      return this.err = user;
    }

  }

}
