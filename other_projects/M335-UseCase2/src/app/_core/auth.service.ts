import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../_types/user';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private afAuth: AngularFireAuth, private navCtrl: NavController, private toast: ToastController, private menu:MenuController) { }

  async loginWithEmailAndPassword (user: User, redirectToURL?: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.router.navigateByUrl('/gallerie');
      }
    }
    catch(e) {
      const toast = await this.toast.create({
        message: "Fehler bei Anmeldung",
        duration: 2000,
        position: "top",
        buttons: [
          {
            text: "Done",
            role: "Cancel"
          }
        ]
      })
      toast.present();
    }
  }

  async createUserWithEmailAndPassword (user: User, redirectToURL?: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
      (await this.afAuth.currentUser).updateProfile({ displayName: user.displayname });
      this.router.navigateByUrl('/gallerie');
    }
    catch(e) {
      const toast = await this.toast.create({
        message: "Fehler bei Erstellung eines Accounts",
        duration: 2000,
        position: "top",
        buttons: [
          {
            text: "Done",
            role: "Cancel"
          }
        ]
      })
      toast.present();
    }
  }
  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.afAuth.currentUser !== null;
  }
  
  logout() {
    this.afAuth.signOut();
  }
}
