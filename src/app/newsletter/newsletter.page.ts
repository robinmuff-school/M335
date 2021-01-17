import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.page.html',
  styleUrls: ['./newsletter.page.scss'],
})
export class NewsletterPage implements OnInit {
  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  sendContactForm() {
    console.log("Do something fancy with the form...");
    console.log("Email: " + this.contactForm.get('email').value);
  }
}
