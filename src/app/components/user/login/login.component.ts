import { Component, OnInit } from '@angular/core';
import { ILoginUser } from 'src/app/interfaces/loginUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','../../../app.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginHandler(loginForm:ILoginUser){
    console.log(loginForm);
    

  }

}
