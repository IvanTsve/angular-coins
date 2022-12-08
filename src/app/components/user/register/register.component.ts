import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { IRegisterUser } from 'src/app/interfaces/registerUser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss','../../../app.component.scss']
})
export class RegisterComponent implements OnInit {

  // @Input() registerForm
  // @ViewChild('f') f: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  registerHandler(registerForm:IRegisterUser) {
    console.log(registerForm);
    
  }

}
