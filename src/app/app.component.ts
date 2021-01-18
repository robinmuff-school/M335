import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './_core/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public isLogedin;

  public selectedIndex = 0;
  public appPages = [];
  private sideLinks = [
    {
      title: 'Testpage',
      url: '/testpage',
      icon: 'wine'
    },
    {
      title: 'Navigation',
      url: '/navigation',
      icon: 'beer'
    },
    {
      title: 'NavigationDetail',
      url: '/navigationdetail',
      icon: 'beer'
    },
    {
      title: 'Zahlen',
      url: '/zahlen',
      icon: 'beer'
    },
    {
      title: 'String',
      url: '/string',
      icon: 'beer'
    },
    {
      title: 'Objekte',
      url: '/objekte',
      icon: 'beer'
    },
    {
      title: 'Array',
      url: '/array',
      icon: 'beer'
    },
    {
      title: 'Data Binding',
      url: '/data-binding',
      icon: 'beer'
    },
    {
      title: 'Taschenrechner',
      url: '/taschenrechner',
      icon: 'calculator'
    }, {
      title: 'Alerts',
      url: '/alerts',
      icon: 'alert'
    }, {
      title: 'Newsletter',
      url: '/newsletter',
      icon: 'beer'
    }, {
      title: "Chat",
      url: "/chat",
      icon: "beer"
    }, {
      title: "Lokaler Speicher",
      url: "/speicher",
      icon: "beer"
    }
  ]

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afAuth: AuthService
  ) {
    this.initializeApp();

    this.afAuth.authstate().subscribe(auth => {
      this.appPages = this.sideLinks;
      
      if (auth == null) {
        this.appPages.push({
          title: "LOGIN",
          url: "/login",
          icon: "beer"
        })
      } else {
        this.appPages.push({
          title: "LOGOUT",
          url: "/logout",
          icon: "beer"
        })
      }
    })
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
