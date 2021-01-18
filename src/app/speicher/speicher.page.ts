import { Component, OnInit } from '@angular/core';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-speicher',
  templateUrl: './speicher.page.html',
  styleUrls: ['./speicher.page.scss'],
})
export class SpeicherPage implements OnInit {
  public isfirststart:boolean;

  constructor(private storage: Storage) { 
  }

  async ngOnInit() {
    this.loadVar();
  }

  click() {
    this.loadVar(false);
  }

  async loadVar(pi_newval?:boolean) {
    if (await this.storage.get('isFirststart') == null) await this.storage.set('isFirststart', true);
    if (pi_newval !== undefined) this.storage.set('isFirststart', pi_newval);
    this.isfirststart = await this.storage.get('isFirststart');
  }
}
