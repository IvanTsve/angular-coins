import { Component, Input, Output } from '@angular/core';
import { IUser } from './interfaces/user';
import { UsersService } from "./services/users.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  user: any;
  constructor(public UsersService: UsersService) {
  }

  
  title = 'coins';
}
