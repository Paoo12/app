import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest4_1Page } from '../quest1/quest4_1';


@Component({
  selector: 'page-quiz4',
  templateUrl: 'quiz4.html'
})
export class Quiz4Page {

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
    this.navCtrl.setRoot(Quest4_1Page);
  }


}
