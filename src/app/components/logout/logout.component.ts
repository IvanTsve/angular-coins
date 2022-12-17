import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {

  constructor(private router: Router, private UsersService:UsersService) { }

  ngOnInit(): void {

    const me = this;

    localStorage.removeItem('uc');
    me.UsersService.user = null;

    me.router.navigate(['/']);

  }

}
