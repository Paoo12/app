import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest4_1Page } from '../quest1/quest4_1';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Component({
  selector: 'page-quiz4',
  templateUrl: 'quiz4.html'
})
export class Quiz4Page {

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
            this.navCtrl.setRoot(Quest4_1Page);
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
