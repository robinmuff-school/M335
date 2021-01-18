import { Component, OnInit } from '@angular/core';
import { User } from '../_core/auth.service';
import { AuthService } from "../_core/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  user= {} as User;

  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }

  async register(user:User) {
    this.authservice.createUserWithEmailAndPassword(user);
  }
}
