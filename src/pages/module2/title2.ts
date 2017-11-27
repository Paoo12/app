import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopoverPage } from '../popover/popover';
import { P2Page } from '../module2/page2/page2';

@Component({
  selector: 'page-title2',
  templateUrl: 'title2.html'
})
export class Title2Page {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  start(){
    this.navCtrl.push(P2Page);
    }
}
