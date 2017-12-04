import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { Quest2_9Page } from '../quest9/quest2_9';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { End2Page } from '../endpage2/endpage2';


@Component({
  selector: 'page-quest10',
  templateUrl: 'quest2_10.html'
})
export class Quest2_10Page {

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
    this.navCtrl.setRoot(End2Page, {score: this.x});
  }

}
