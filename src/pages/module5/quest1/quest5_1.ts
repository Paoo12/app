import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest5_2Page } from '../quest2/quest5_2';


@Component({
  selector: 'page-quest1',
  templateUrl: 'quest5_1.html'
})
export class Quest5_1Page {

    toggleshowhide:any;
    two:any;
    three:any;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  validate1()
  {
    this.navCtrl.push(Quest5_2Page);
  }
}
