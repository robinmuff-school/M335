import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController, ToastController } from '@ionic/angular';
import { User } from '../_types/user';
import { Router } from '@angular/router';
import { AuthService } from '../_core/auth.service';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.page.html',
  styleUrls: ['./registrierung.page.scss'],
})
export class RegistrierungPage implements OnInit {

  user = {} as User;

  constructor(private router: Router,
    private alertCtrl: AlertController,
    private toast: ToastController,
    private auth:AuthService,
    private menu:MenuController
   ) {
  }

  ngOnInit() {
  }

  async register (user: User) {
    if (user.email !== undefined && user.displayname !== undefined && user.password !== undefined) {
      this.auth.createUserWithEmailAndPassword(user);
      this.router.navigateByUrl("/gallerie");
    }
  }

  goBackToLogin() {
    this.router.navigate(["/login"]);
  }
}
