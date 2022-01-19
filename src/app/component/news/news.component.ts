import { News } from './../../object/news/news';
import { NewsService } from './../../service/news/news.service';
import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/object/news/data';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  ListOfNews!: Data[];
  constructor(private NewsService: NewsService) {
    if(localStorage.getItem('token') == null){
      window.location.href="http://localhost:4200/login";
    }
  }

  ngOnInit(): void {
    this.GetAll();
  }

  GetAll(){
    this.NewsService.GetAll().subscribe(data=>{
      let value = data as News;
      this.ListOfNews = value.data;
      console.log(this.ListOfNews);
    });
  }

}
