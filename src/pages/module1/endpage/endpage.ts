import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Quest10Page } from '../quest10/quest10';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopoverPage } from '../../popover/popover';
import { ModulesPage } from '../../modules/modules';


@Component({
  selector: 'page-endpage',
  templateUrl: 'endpage.html'
})
export class EndPage {

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