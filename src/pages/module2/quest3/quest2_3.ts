import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest2_4Page } from '../quest4/quest2_4';


@Component({
  selector: 'page-quest3',
  templateUrl: 'quest2_3.html'
})
export class Quest2_3Page {

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
    this.navCtrl.push(Quest2_4Page);
  }

}
