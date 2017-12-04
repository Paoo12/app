import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Quest3_5Page } from '../quest5/quest3_5';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopoverPage } from '../../popover/popover';
import { ModulesPage } from '../../modules/modules';


@Component({
  selector: 'page-endpage3',
  templateUrl: 'endpage3.html'
})
export class End3Page {

    x:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.x = this.navParams.get('score');
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  
  back()
  {
      this.navCtrl.setRoot(ModulesPage);
  }

}