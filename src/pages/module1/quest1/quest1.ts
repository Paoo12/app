import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest2Page } from '../quest2/quest2';


@Component({
  selector: 'page-quest1',
  templateUrl: 'quest1.html'
})
export class Quest1Page {

    x=0;
    one:any;
    two:boolean;
    three:boolean;
    four:boolean;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public navParams:NavParams) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  validate1()
  {
    if((this.two==true)&&(this.three==true))
    this.x= this.x+1;

    console.log(this.x);
    this.navCtrl.push(Quest2Page, {score: this.x});

  }
}
