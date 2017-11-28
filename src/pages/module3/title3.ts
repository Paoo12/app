import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { P3Page } from '../module3/page3/page3';

@Component({
  selector: 'page-title3',
  templateUrl: 'title3.html'
})
export class Title3Page {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  start()
  {
    this.navCtrl.push(P3Page);
  }
}
