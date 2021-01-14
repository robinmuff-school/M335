import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.page.html',
  styleUrls: ['./testpage.page.scss'],
})
export class TestpagePage implements OnInit {
  myVar = 4;

  constructor() { }

  ngOnInit() {
  }

  clickBtn() {
    this.myVar = 10;
    console.log("LOL")
  }

}
