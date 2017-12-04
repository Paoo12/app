import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest2_8Page } from '../quest8/quest2_8';
import { Quest2_6Page } from '../quest6/quest2_6';


@Component({
  selector: 'page-quest7',
  templateUrl: 'quest2_7.html'
})
export class Quest2_7Page {

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
    this.navCtrl.push(Quest2_8Page, {score: this.x});
  }

}
