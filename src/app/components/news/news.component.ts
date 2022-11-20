import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { INews } from "../../interfaces/new";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: INews[] | null = null;

  constructor(private ApiService:ApiService) { }


  ngOnInit(): void {
    const me = this;
    this.ApiService.loadNews().subscribe({
      next(value) {
        me.news = value['feed'];
        console.log(me.news);
        
      },
      error(err) {
        console.log(err);
        
      },
    })
  }

}
