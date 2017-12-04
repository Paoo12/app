import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest10Page } from '../quest10/quest10';
import { Quest8Page } from '../quest8/quest8';


@Component({
  selector: 'page-quest9',
  templateUrl: 'quest9.html'
})
export class Quest9Page {

    toggleshowhide:any;
    two:any;
    three:any;
    x:any;

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
    this.navCtrl.push(Quest10Page, {score: this.x});
  }

}
