import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest3_1Page } from '../quest1/quest3_1';


@Component({
  selector: 'page-quiz3',
  templateUrl: 'quiz3.html'
})
export class Quiz3Page {

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
    this.navCtrl.setRoot(Quest3_1Page);
  }

}
