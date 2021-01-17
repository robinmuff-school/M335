import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
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
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
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
