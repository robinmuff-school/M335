import { Component, OnInit } from '@angular/core';
import { User } from '../_core/auth.service';
import { Router } from '@angular/router';
import { AuthService } from "../_core/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user= {} as User;

  constructor(private router: Router, private authservice:AuthService) { }

  ngOnInit() {
  }

  async login(user:User) {
    this.authservice.loginWithEmailAndPassword(user);
  }

  register() {
    this.router.navigate(["/register"]);
  }
}
