import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { AlertController } from 'ionic-angular';
import { Quest1Page } from '../quest1/quest1';


@Component({
  selector: 'page-quiz1',
  templateUrl: 'quiz1.html'
})
export class Quiz1Page {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public alertCtrl: AlertController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  confirm() {
    let confirm = this.alertCtrl.create({
      title: 'Take Exam?',
      message: '',
      buttons: [
        {
          text: 'Proceed',
          handler: () => {
            this.navCtrl.setRoot(Quest1Page);
          }
        },
        {
          text: 'Back',
          handler: () => {
            console.log('Back clicked');
          }
        }
      ]
    });
    confirm.present();

  }
}
