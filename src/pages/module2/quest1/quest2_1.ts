import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest2_2Page } from '../quest2/quest2_2';



@Component({
  selector: 'page-quest1',
  templateUrl: 'quest2_1.html'
})
export class Quest2_1Page {

    toggleshowhide:any;
    two:any;
    three:any;
    x=0;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public navParams: NavParams) {

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
    this.navCtrl.push(Quest2_2Page, {score: this.x});
  }
}
