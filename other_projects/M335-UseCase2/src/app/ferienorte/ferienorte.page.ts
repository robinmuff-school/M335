import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Ferienort } from "../_types/ferienort";

@Component({
  selector: 'app-ferienorte',
  templateUrl: './ferienorte.page.html',
  styleUrls: ['./ferienorte.page.scss'],
})
export class FerienortePage implements OnInit {

  groupNumber: string = 'G1'; // Bsp. G1

  ferienorte: Observable<Ferienort[]>;
  ferienorteREF: AngularFireList<Ferienort>;

  constructor(public alertCtrl: AlertController,afDb: AngularFireDatabase, public menu:MenuController) {
    this.ferienorteREF = afDb.list('/ferienorte/' + this.groupNumber);
    this.ferienorte = this.ferienorteREF.valueChanges();
  }

  ngOnInit() {
    this.menu.enable(true, "main-content");
  }

  async addFerienort() {
    const alert = await this.alertCtrl.create({
      header: 'Ferienort hinzufügen',
      inputs: [
        {
          name: 'ferienort',
          type: 'text',
          placeholder: 'Name Ferienort',
        }
      ],
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            const data:Ferienort = {
              name: alertData.ferienort
            }
            this.ferienorteREF.push(data);
          }
        }
      ]
    });

    await alert.present();
  }
}
