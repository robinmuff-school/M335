import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.page.html',
  styleUrls: ['./alerts.page.scss'],
})
export class AlertsPage implements OnInit {
  nickname:string;

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Nickname',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Enter your Nickname here',
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            this.nickname = alertData.name1
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
}
