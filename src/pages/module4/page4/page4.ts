import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { ModulesPage } from '../../modules/modules';


@Component({
  selector: 'page-page4',
  templateUrl: 'page4.html'
})
export class P4Page {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  back()
  {
    this.navCtrl.push(ModulesPage);
  }


}
