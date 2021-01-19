import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, MenuController } from '@ionic/angular';
import { User } from '../_types/user';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";
import { AuthService } from '../_core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user = {} as User;

  constructor(
    private alertCtrl: AlertController,
    private router: Router,
    private auth:AuthService,
    private menu:MenuController,
    private storage:Storage
  ) {
  }
  async ngOnInit() {
    if (await this.storage.get('isFirststart') == null) await this.storage.set('isFirststart', true);
    if (await this.storage.get("isFirststart") == true) {
      this.router.navigateByUrl("/willkommen")
      await this.storage.set('isFirststart', false)
    }
  }
  async doLogin (user: User) {
    if (user.email !== undefined && user.password !== undefined) {
      this.auth.loginWithEmailAndPassword(user);
      this.router.navigateByUrl("/gallerie");
    }
  }

  gotoRegistrierung () {
    this.router.navigate(["/registrierung"]);
  }
}
