import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest4_2Page } from '../quest2/quest4_2';


@Component({
  selector: 'page-quest1',
  templateUrl: 'quest4_1.html'
})
export class Quest4_1Page {

    toggleshowhide:any;
    two:any;
    three:any;
    x=0;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  ans()
  {
    this.x=this.x+1;
    console.log("x= ", this.x);
  }
  validate1()
  {
    console.log(this.x);
    this.navCtrl.push(Quest4_2Page, {score: this.x});
  }
}
