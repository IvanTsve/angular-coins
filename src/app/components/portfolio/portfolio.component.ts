import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  user:IUser;
  get getUser():any {
    return this.userService.user;
  }

  constructor(private router: Router, private userService: UsersService, private route: ActivatedRoute,) { }


  ngOnInit(): void {
    const me = this;
    let id = this.route.snapshot.paramMap.get('id');
    me.user = me.getUser;

  }

}
