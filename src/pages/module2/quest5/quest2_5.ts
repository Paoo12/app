import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest2_6Page } from '../quest6/quest2_6';


@Component({
  selector: 'page-quest5',
  templateUrl: 'quest2_5.html'
})
export class Quest2_5Page {

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
    this.navCtrl.push(Quest2_6Page);
  }

}
