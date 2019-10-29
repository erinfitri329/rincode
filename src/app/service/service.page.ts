import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-service',
  templateUrl: 'service.page.html',
  styleUrls: ['service.page.scss'],
})
export class ServicePage {
  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'SERVICE',
      message: 'Yakin Barang Anda di Service?',
      buttons: ['Cancel', 'OK']
    });

    await alert.present();
  }}