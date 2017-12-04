import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Quest2_10Page } from '../quest10/quest2_10';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopoverPage } from '../../popover/popover';
import { ModulesPage } from '../../modules/modules';


@Component({
  selector: 'page-endpage2',
  templateUrl: 'endpage2.html'
})
export class End2Page {

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