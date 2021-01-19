import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    { title: 'Gallerie', url: '/gallerie', icon: 'images', titlecolor:  'tertiary', iconcolor:  'tertiary'},
    { title: 'Ferienorte', url: '/ferienorte', icon: 'airplane', titlecolor:  'danger', iconcolor:  'danger'},
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false)
    this.initializeApp();
  }
  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd && (event.url === '/login' || event.url === '/register' || event.url === '/welcome')) {
        this.menuCtrl.enable(false);
      }
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    //  this.menuCtrl.enable(false);

    });
  }
}
