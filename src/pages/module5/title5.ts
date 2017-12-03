import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { P5Page } from '../module5/page5/page5';
import { Quiz5Page } from './quiz5/quiz5';

@Component({
  selector: 'page-title5',
  templateUrl: 'title5.html'
})
export class Title5Page {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }
  
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  start(){
    this.navCtrl.push(P5Page);
  }

  quiz()
  {
    this.navCtrl.push(Quiz5Page);
  }
}
