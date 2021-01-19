import { Component } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './_core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public email = "";
  public appPages = [
    {
      title: 'News',
      url: '/news',
      icon: 'newspaper'
    },
    {
      title: 'Chat',
      url: '/chat',
      icon: 'chatbubbles'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth:AuthService,
    private router:Router,
    private menu:MenuController
    ) {
    this.initializeApp();
    this.loadEmail();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async loadEmail() {
    //this.email = await this.auth.getUserEmail();
  }

  async logout() {
    await this.auth.logout();
    this.router.navigate(["/login"])
    this.menu.close();
  }
}
