import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest2_1Page } from '../quest1/quest2_1';


@Component({
  selector: 'page-quiz2',
  templateUrl: 'quiz2.html'
})
export class Quiz2Page {

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
    this.navCtrl.setRoot(Quest2_1Page);
  }

  

}
