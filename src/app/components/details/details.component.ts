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
  coin: any | null = null;

  get getCoin(): ICrypto[] {
    return this.usersService.user!['coins'];
  }
  
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

  onWatchHandler(data: ICrypto) {
    // let uid = ApiService.
    // let paylod = {
    //   id: data.uuid,
    //   rank: data.rank,
    //   price: data.price,
    //   name: data.name,
    //   userId: this.usersService.user?.id,

    // }
    this.getCoin.push(data);
    let uid = this.usersService.user?.id;
    data['userId'] = uid;

   return this.usersService.saveCoin(this.getCoin,uid).subscribe((res:any) => {
    console.log(res);
    
   });

   
   


  }

}
