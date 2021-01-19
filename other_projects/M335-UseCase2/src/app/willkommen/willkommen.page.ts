import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-willkommen',
  templateUrl: './willkommen.page.html',
  styleUrls: ['./willkommen.page.scss'],
})
export class WillkommenPage implements OnInit {
  constructor(private storage:Storage, private router: Router, private menu:MenuController) { }

  async ngOnInit() {
    this.menu.enable(false, "main-content");
  }

  welcomeDone() {
    this.router.navigateByUrl("/login");
  }
}
