import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_core/auth.service';
import { User } from '../_types/user';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.page.html',
  styleUrls: ['./registrierung.page.scss'],
})
export class RegistrierungPage implements OnInit {
  registerButtonDisabled: boolean = true;

  userData: User = {"name": "", "email": "", "password": ""};
  userpw2: string;

  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  
  doRegister() {
    this.auth.createUserWithEmailAndPassword(this.userData);
  }

}
