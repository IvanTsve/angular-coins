import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  get user() {
    return this.UsersService.user;
  }
  constructor(private UsersService: UsersService) { }


  

}
