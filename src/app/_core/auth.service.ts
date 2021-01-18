import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated: any;

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  async loginWithEmailAndPassword (user: User) {
    try { 
      const result = await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.router.navigate(["/"]);
      }      
    } catch (e) {
      console.error(e);
    }
  }

  async createUserWithEmailAndPassword (user: User) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.router.navigate(["/"]);
      }
    } catch (e) {
      console.error(e)
    }
  }
  
  async logout() {
    await this.afAuth.signOut();
  }

  async getUserName() {
    return await (await this.afAuth.currentUser).email;
  }

  authstate() {
    return this.afAuth.authState;
  }
}
export interface User {
    email: string;
    password: string;
    displayname: string;
  }
