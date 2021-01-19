import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NewsDetailService } from "../_core/news-detail.service";
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { NewsMessage } from "../_types/news";

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  news: Observable<NewsMessage[]>;
  newsREF: AngularFireList<NewsMessage>;

  constructor(private router: Router,afDb: AngularFireDatabase, private newsMsgService: NewsDetailService, public newsdetailservice: NewsDetailService) {
    this.newsREF = afDb.list('/news');
    this.news = this.newsREF.valueChanges();
   }

  ngOnInit() {
  }

  navtoDetail(item:NewsMessage) {
    this.newsdetailservice.setNewsMessageDetail(item);
    this.router.navigate(['/news-detail']);
  }
  
}
