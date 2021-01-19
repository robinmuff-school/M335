import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User} from "../_types/user";
import { AuthService } from "../_core/auth.service";
import { Storage } from "@ionic/storage";
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginButtonDisabled: boolean = true;
  userData: User = {"name": "", "email": "", "password": ""};
  
  constructor(private router: Router, private auth:AuthService, private storage:Storage, private menu:MenuController) { }

  async ngOnInit() {
  }

  async doLogin (user: User) {
    this.auth.loginWithEmailAndPassword(user);
  }

  gotoRegistrierung () {
    this.router.navigate(["/registrierung"]);
  }
}
