import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {
  navigateToFormTS: string = '/navigation-detail';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToDetailPageByURL() {
    this.router.navigateByUrl(this.navigateToFormTS);
  }
}
