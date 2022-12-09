import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  coin:any;
  constructor(private ApiService: ApiService,private router: ActivatedRoute) { }

  ngOnInit(): void {
    let params: any =this.router.params;
    let id = params['_value'].id;
    const me = this;

    
    this.ApiService.getSingleCoin(id).subscribe({
      next(c) {
        me.coin = c.data.coin;
      }
    });

  }

}
