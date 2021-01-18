import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../_core/auth.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router: Router, private authservice:AuthService) { }

  ngOnInit() {
  }

  async logout() {
    this.authservice.logout();
    this.router.navigateByUrl("/")
  }

}
