import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { P4Page } from '../module4/page4/page4';
import { Quiz4Page } from './quiz4/quiz4';

@Component({
  selector: 'page-title4',
  templateUrl: 'title4.html'
})
export class Title4Page {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  start(){
    this.navCtrl.push(P4Page);
  }
  quiz()
  {
    this.navCtrl.push(Quiz4Page);
  }

}
