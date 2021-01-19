import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-willkommen',
  templateUrl: './willkommen.page.html',
  styleUrls: ['./willkommen.page.scss'],
})
export class WillkommenPage implements OnInit {

  constructor(private router: Router, private storage:Storage) { }

  async ngOnInit() {
    if (await this.storage.get('isFirststart') === null) await this.storage.set('isFirststart', true);
    if (await this.storage.get("isFirststart") === false) {
      this.router.navigateByUrl("/login")
      await this.storage.set('isFirststart', false)
    }
  }

  async toLogin() {
    await this.storage.set('isFirststart', false)
    this.router.navigateByUrl("/login");
  }
}
