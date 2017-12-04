import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest3Page } from '../quest3/quest3';
import { Quest1Page } from '../quest1/quest1';


@Component({
  selector: 'page-quest2',
  templateUrl: 'quest2.html'
})
export class Quest2Page {

    two:boolean;
    three:boolean;
    one:boolean;
    four:boolean;
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
  this.navCtrl.push(Quest3Page, {score: this.x});
}
}
