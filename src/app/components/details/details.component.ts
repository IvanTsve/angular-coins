import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ICrypto } from 'src/app/interfaces/crypto';
import { IUser } from 'src/app/interfaces/user';
import { UsersService } from 'src/app/services/users.service';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  coin: any | null = null;

  get getCoin(): ICrypto[] {
    return this.usersService.user!['coins'];
  }
  get user(): any {
    return this.usersService.user;
  }

  constructor(private ApiService: ApiService, private router: ActivatedRoute, private usersService: UsersService, private routerNav: Router) { }

  ngOnInit(): void {
    let params: any = this.router.params;
    let id = params['_value'].id;
    const me = this;


    this.ApiService.getSingleCoin(id).subscribe({
      next(c) {
        me.coin = c.data.coin;
      }
    });

  }

  onWatchHandler(data: ICrypto) {
    const me = this;
    this.getCoin.push(data);
    let uid = this.usersService.user?.id;
    data['userId'] = uid;

    return this.usersService.saveCoin(this.getCoin, uid).subscribe((res: any) => {
      me.routerNav.navigate(['/']);
      me.user['msg'] = 'Add new coin to favourite';
      setTimeout(() => {
        me.user['msg'] = null;
      }, 2000);


    });





  }

}
