import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Ferienort } from "../_types/ferienort";

@Component({
  selector: 'app-ferienorte',
  templateUrl: './ferienorte.page.html',
  styleUrls: ['./ferienorte.page.scss'],
})
export class FerienortePage implements OnInit {

  ferienorteList: Observable<Ferienort[]>;
  ferienorteListRef: AngularFireList<Ferienort>;
  groupNumber: string = 'G0'; // Bsp. G1


  constructor(public alertCtrl: AlertController, afDb: AngularFireDatabase) {
    this.ferienorteListRef = afDb.list('/ferienorte/' + this.groupNumber);
    this.ferienorteList = this.ferienorteListRef.valueChanges();
  }

  ngOnInit() {
  }

  addFerienort() {
    this.alertCtrl.create({
      header: 'FERIENORT HINZUFÜGEN',
      inputs: [
        {
          name: 'name',
          placeholder: 'NAME FERIENORT'
        }
      ],
      buttons: [
        {
          text: 'ABBRECHEN',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'HINZUFÜGEN',
          handler: data => {
            if (data.name != '') {
              this.ferienorteListRef.push({ name: data.name });
            }
            else {
              return false;
            }
          }
        }
      ]
    }).then(alert => alert.present());
  }
}
