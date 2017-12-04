import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest5Page } from '../quest5/quest5';
import { Quest3Page } from '../quest3/quest3';

@Component({
  selector: 'page-quest4',
  templateUrl: 'quest4.html'
})
export class Quest4Page {

  two:boolean;
  three:boolean;
  one:boolean;
  four:boolean;
  five: boolean;
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
    this.navCtrl.push(Quest5Page, {score: this.x});
  }

}
