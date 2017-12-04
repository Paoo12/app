import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Quest5_10Page } from '../quest10/quest5_10';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopoverPage } from '../../popover/popover';
import { ModulesPage } from '../../modules/modules';


@Component({
  selector: 'page-endpage5',
  templateUrl: 'endpage5.html'
})
export class End5Page {

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