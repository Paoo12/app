import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest4_3Page } from '../quest3/quest4_3';
import { Quest4_1Page } from '../quest1/quest4_1';


@Component({
  selector: 'page-quest2',
  templateUrl: 'quest4_2.html'
})
export class Quest4_2Page {

    toggleshowhide:any;
    two:any;
    three:any;
    x: any;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public navParams: NavParams) {
    this.x = this.navParams.get('score');
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
    this.navCtrl.push(Quest4_3Page, {score: this.x});
  }

}
