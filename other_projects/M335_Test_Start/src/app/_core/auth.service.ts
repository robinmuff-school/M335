import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../_types/user'; 
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private navCtrl: NavController, private toast: ToastController, private router:Router) { }

  async loginWithEmailAndPassword (user: User, redirectToURL?: string) {
    try { 
      const result = await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        const toast = await this.toast.create({
          message: "Willkommen " + (await this.afAuth.currentUser).displayName,
          duration: 2000,
          color: "success",
          position: "top",
        })
        toast.present();

        this.router.navigate(["/"]);
      }      
    } catch (e) {
      const toast = await this.toast.create({
        message: "Fehler beim einloggen",
        duration: 5000,
        color: "danger",
        position: "top",
      })
      toast.present();
    }
  }

  async createUserWithEmailAndPassword (user: User, redirectToURL?: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
      if (result) {
        (await this.afAuth.currentUser).updateProfile({ displayName: user.name });
        const toast = await this.toast.create({
          message: "Registrierung erfolgreich",
          duration: 2000,
          color: "success",
          position: "top",
        })
        toast.present();
        this.router.navigateByUrl('/');
      }
    }
    catch(e) {
      const toast = await this.toast.create({
        message: "Fehler bei Erstellung eines Accounts",
        duration: 5000,
        color: "danger",
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

  async getUserEmail() {
    console.log(await this.afAuth.currentUser)
    return await (await this.afAuth.currentUser).email;
  }
  
  async logout() {
    await this.afAuth.signOut();
  }
}
