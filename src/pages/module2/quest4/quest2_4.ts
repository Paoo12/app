import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest2_5Page } from '../quest5/quest2_5';
import { Quest2_3Page } from '../quest3/quest2_3';


@Component({
  selector: 'page-quest4',
  templateUrl: 'quest2_4.html'
})
export class Quest2_4Page {

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
    this.navCtrl.push(Quest2_5Page, {score: this.x});
  }

}
