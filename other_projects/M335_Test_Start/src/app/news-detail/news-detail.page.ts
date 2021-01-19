import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsDetailService } from "../_core/news-detail.service";
import { NewsMessage } from "../_types/news";

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.page.html',
  styleUrls: ['./news-detail.page.scss'],
})
export class NewsDetailPage implements OnInit {

  newsdetail: NewsMessage;

  constructor(private router: Router, private route: ActivatedRoute, private newsMsgService: NewsDetailService) { 
    this.newsdetail = this.newsMsgService.getNewsMessageDetail();
  }

  ngOnInit() {
    
  }

}
