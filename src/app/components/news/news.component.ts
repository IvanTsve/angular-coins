import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { INews } from "../../interfaces/new";
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: INews[] | [] = [];
  
  trentNews: INews | null = null

  constructor(private ApiService: ApiService, private UsersService: UsersService) { }
  get new(): INews[] {
    return this.UsersService.user!['news'];
  }


  ngOnInit(): void {
    const me = this;
    this.ApiService.loadNews().subscribe({
      next(value) {
        me.news = value['feed'];
        me.trentNews = value['feed'][0];
      },
      error(err) {

      },
    })
  }

  onWatchHandler(data: INews) {
    const me = this;
    
    let uid = this.UsersService.user?.id;
    data['userId'] = uid;
    this.new.push(data);
    return this.UsersService.saveNews(this.new,uid).subscribe((res: any) => {
      me.UsersService.user!['msg'] = 'Added to favourite';
      setTimeout(() => {
        me.UsersService.user!['msg'] = '';
      }, 2000);
    });


  }
}
