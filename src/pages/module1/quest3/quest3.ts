import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest4Page } from '../quest4/quest4';
import { Quest2Page } from '../quest2/quest2';
import { NavParams } from 'ionic-angular/navigation/nav-params';


@Component({
  selector: 'page-quest3',
  templateUrl: 'quest3.html'
})
export class Quest3Page {

  x:any;
  one:any;
  two:boolean;
  three:boolean;
  four:boolean;


  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public navParams: NavParams) {
    this.x = this.navParams.get('score');
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  validate1()
  {
  
    if((this.two==true)&&(this.four==true))
    this.x= this.x+1;

    console.log(this.x);

    this.navCtrl.push(Quest4Page, {score: this.x});
  }
}
