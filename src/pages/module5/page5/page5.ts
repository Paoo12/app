import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverPage } from '../../popover/popover';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { ModulesPage } from '../../modules/modules';
import { HomePage } from '../../home/home';
import { CalcPage } from '../../calculator/calculator';


@Component({
  selector: 'page-page5',
  templateUrl: 'page5.html'
})
export class P5Page {

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
    this.navCtrl.setRoot(ModulesPage);
  }

  home()
  {
    this.navCtrl.setRoot(HomePage);
  }

  list()
  {
    this.navCtrl.setRoot(ModulesPage);
  }

  calc()
  {
    this.navCtrl.push(CalcPage);
  }




}
