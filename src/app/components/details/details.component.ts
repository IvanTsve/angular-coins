import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ICrypto } from 'src/app/interfaces/crypto';
import { UsersService } from 'src/app/services/users.service';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  coin: any;
  constructor(private ApiService: ApiService, private router: ActivatedRoute, private usersService: UsersService) { }

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

  onWatchHandler(coin: ICrypto) {
    // let uid = ApiService.
    let paylod = {
      id: coin.uuid,
      rank: coin.rank,
      price: coin.price,
      name: coin.name,
      // uid: ApiService.name,

    }
    console.log(coin);
    // this.usersService.saveCoin(coin)


  }

}
