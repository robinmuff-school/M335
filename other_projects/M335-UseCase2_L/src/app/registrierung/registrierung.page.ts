import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController, MenuController } from '@ionic/angular';
import { User } from '../_types/user';
import { AuthService } from '../_core/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registrierung',
  templateUrl: './registrierung.page.html',
  styleUrls: ['./registrierung.page.scss'],
})
export class RegistrierungPage implements OnInit {
  public registerForm: FormGroup;
  user = {} as User;

  constructor(private router: Router,
    private auth: AuthService,
    private alertCtrl: AlertController,
    private toast: ToastController,
    private menuCtrl: MenuController
   ) {
     this.menuCtrl.enable(false);
     this.registerForm = new FormGroup({
      displayname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
   });
  }

  ngOnInit() {
  }

  async register () {
    if(this.registerForm.valid) {
      this.auth.createUserWithEmailAndPassword({
        displayname: this.registerForm.get('displayname').value, 
        email: this.registerForm.get('email').value, 
        password: this.registerForm.get('password').value 
      }, '');
      this.registerForm.reset();
    }
  }

  goBackToLogin() {
    this.router.navigateByUrl('/login');
  }
}
