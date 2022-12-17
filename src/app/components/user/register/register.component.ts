import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { IRegisterUser } from 'src/app/interfaces/registerUser';
import { UsersService } from "../../../services/users.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../../app.component.scss']
})
export class RegisterComponent {
  err: any;

  constructor(private UsersService: UsersService, private router: Router) { }


  registerHandler(registerForm: IRegisterUser) {
    const me = this;

    this.UsersService.registrationCheck().subscribe((data: any) => {
      let err: any = {};
      let users = Object.entries(data);
      let user = users.some((x: any) => x[1]['email'] == registerForm?.email || x[1]['username'] == registerForm?.username);
      if (registerForm?.email.length < 5 || !registerForm?.email.includes('@') || registerForm?.username.length < 5 || registerForm?.password.length < 5) {
        err['status'] = 'error';
        err['msg'] = 'all fields are required \n min length is 5 characters';
        return me.err = err;
      } else if (!registerForm?.email.includes('@')) {
        err['status'] = 'error';
        err['msg'] = 'email needs to include \'@\'';
        return me.err = err;

      }

      if (user) {
        err['status'] = 'error';
        err['msg'] = 'email or username are already used';
        return me.err = err;
      } else {
        this.UsersService.register(registerForm).subscribe((data: any) => {
          if (data.name) {
            let userData: any = {};
            userData['msg'] = 'successfully registered';
            userData['id'] = '';
            me.UsersService.user = userData;
            me.router.navigate(['/auth/login']);
            setTimeout(() => {
              userData['msg'] = null;
            }, 2000);

          }

        });
      }


    })




    // return this.UsersService.register(registerForm).subscribe({
    //   next(value) {
    //     console.log(value);

    //   },
    //   error(err) {
    //     console.error(err)
    //   }
    // })

  }

}
