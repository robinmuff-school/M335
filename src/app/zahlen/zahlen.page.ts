import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zahlen',
  templateUrl: './zahlen.page.html',
  styleUrls: ['./zahlen.page.scss'],
})
export class ZahlenPage implements OnInit {
  five:number = 5;
  seven:number = 7;
  twentyfive:number = 25;
  hundert:number = 100;
  one:number = 1

  constructor() { }

  ngOnInit() {
  }

}
