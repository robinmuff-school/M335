import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taschenrechner',
  templateUrl: './taschenrechner.page.html',
  styleUrls: ['./taschenrechner.page.scss'],
})
export class TaschenrechnerPage implements OnInit {
  calculation:string = "";

  constructor() { }

  ngOnInit() {
  }

  addNumber(number:string) {
    this.calculation += number;
  }

  calculate() {
    this.calculation = eval(this.calculation);
  }
  
  clear() {
    this.calculation = "";
  }
}
