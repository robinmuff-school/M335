import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.page.html',
  styleUrls: ['./gallerie.page.scss'],
})
export class GalleriePage implements OnInit {

  groupNumber: string = 'G1'; // Bsp. G1

  gallerie: Observable<Gallerie[]>;
  gallerieREF: AngularFireList<Gallerie>;

  constructor(public alertCtrl: AlertController,afDb: AngularFireDatabase, public menu:MenuController) {
    this.gallerieREF = afDb.list('/gallerie/' + this.groupNumber);
    this.gallerie = this.gallerieREF.valueChanges();
  }


  ngOnInit() {
    this.menu.enable(true, "main-content");
  }

}
export interface Gallerie {
  imgurl: string;
}
