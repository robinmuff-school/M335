import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.page.html',
  styleUrls: ['./newsletter.page.scss'],
})
export class NewsletterPage implements OnInit {
  contactForm: FormGroup;

  constructor(public toastController: ToastController) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
      email: new FormControl('',  Validators.email)
    });
  }

  async sendContactForm() {
    await this.presentToast();
  }

  isContactFormValid(isbutton:boolean = false) {
    if (isbutton) {
      if (this.contactForm.controls.email.value == "") { return true; }
    }
    return !this.contactForm.controls.email.valid && !this.contactForm.controls.email.pending && (this.contactForm.controls.email.dirty);
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'You successfully signed up for the Newsletter.',
      duration: 2000
    });
    toast.present();
  }
}
