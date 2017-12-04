import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest7Page } from '../quest7/quest7';
import { Quest5Page } from '../quest5/quest5';


@Component({
  selector: 'page-quest6',
  templateUrl: 'quest6.html'
})
export class Quest6Page {

    toggleshowhide:any;
    two:any;
    three:any;
    x:any;


  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, 
    public navParams: NavParams) {
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
    this.navCtrl.push(Quest7Page, {score: this.x});
  }

}
