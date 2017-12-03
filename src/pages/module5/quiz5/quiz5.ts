import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest5_1Page } from '../quest1/quest5_1';


@Component({
  selector: 'page-quiz5',
  templateUrl: 'quiz5.html'
})
export class Quiz5Page {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  confirm()
  {
    this.navCtrl.setRoot(Quest5_1Page);
  }


}
