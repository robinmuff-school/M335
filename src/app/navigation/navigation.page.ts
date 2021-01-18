import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {
  navigateToFormTS: string = '/navigationdetail';

  constructor(private router: Router) { }

  ngOnInit() { }

  navToDetailPageByURL() {
    this.router.navigateByUrl('/navigationdetail');
  }
  
  navToDetailwithparam() {
    this.router.navigate(['/navigationdetail', { id: "LOL"}]);
  }

  navToDetailwithparamoverurl() {
    let id = 2
    this.router.navigateByUrl('/navigationdetail/' + id);
  }
}
