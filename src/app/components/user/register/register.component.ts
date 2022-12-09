import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { IRegisterUser } from 'src/app/interfaces/registerUser';
import { UsersService } from "../../../services/users.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','../../../app.component.scss']
})
export class RegisterComponent{


  constructor(private UsersService:UsersService) { }


  registerHandler(registerForm:IRegisterUser) {
    console.log(registerForm);   

    return this.UsersService.register(registerForm).subscribe({
      next(value) {
        console.log(value);
        
      },
      error(err) {
        console.error(err)
      }
    })
    
  }

}
