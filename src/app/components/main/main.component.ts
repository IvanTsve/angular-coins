import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  data: any = [];


  constructor(private ApiService: ApiService) { }
  

  ngOnInit(): void {
    const me = this;
    

  }

}
