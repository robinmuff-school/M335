import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objekte',
  templateUrl: './objekte.page.html',
  styleUrls: ['./objekte.page.scss'],
})
export class ObjektePage implements OnInit {
  person: any = { name : 'Muster', vorname : 'Max' };

  constructor() { }

  ngOnInit() {
  }

}
