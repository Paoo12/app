import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { TitlePage } from '../module1/title';
import { Title2Page } from '../module2/title2';
import { Title3Page } from '../module3/title3';
import { Title4Page } from '../module4/title4';
import { Title5Page } from '../module5/title5';
@Component({
  selector: 'page-modules',
  templateUrl: 'modules.html'
})
export class ModulesPage {

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
   link1()
   {
      this.navCtrl.push(TitlePage);
   }
   link2()
   {
      this.navCtrl.push(Title2Page);
   }

   link3()
   {
      this.navCtrl.push(Title3Page);
   }

   link4()
   {
      this.navCtrl.push(Title4Page);
   }

   link5()
   {
      this.navCtrl.push(Title5Page);
   }



}
