import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.page.html',
  styleUrls: ['./gallerie.page.scss'],
})
export class GalleriePage implements OnInit {

  gallerieList: Observable<Gallerie[]>;
  gallerieListRef: AngularFireList<Gallerie>;
  groupNumber: string = 'G0'; // Bsp. G1


  constructor(public alertCtrl: AlertController, afDb: AngularFireDatabase) {
    this.gallerieListRef = afDb.list('/gallerie/' + this.groupNumber);
    this.gallerieList = this.gallerieListRef.valueChanges();
  }


  ngOnInit() {
  }

}
export interface Gallerie {
  imgurl: string;
}
