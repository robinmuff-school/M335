import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigationdetail',
  templateUrl: './navigationdetail.page.html',
  styleUrls: ['./navigationdetail.page.scss'],
})
export class NavigationdetailPage implements OnInit {
  welcomestring:string = "";
  eventid:string = "";

  constructor(private router: Router, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.welcomestring = this.route.snapshot.paramMap.get('id');
    this.eventid = this.route.snapshot.paramMap.get('eventid');
  }

  navigatetonavigate() {
    this.router.navigate(['/navigation']);
  }
}