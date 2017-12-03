import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest5_6Page } from '../quest6/quest5_6';


@Component({
  selector: 'page-quest5',
  templateUrl: 'quest5_5.html'
})
export class Quest5_5Page {

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
    this.navCtrl.push(Quest5_6Page);
  }

}
