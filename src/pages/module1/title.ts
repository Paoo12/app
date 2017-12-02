import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { P1Page } from '../module1/page1/page1';
import { Quiz1Page } from '../module1/quiz1/quiz1';

@Component({
  selector: 'page-title',
  templateUrl: 'title.html'
})
export class TitlePage {

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
    this.navCtrl.push(P1Page);
  }
  quiz()
  {
    this.navCtrl.setRoot(Quiz1Page);
  }

}
