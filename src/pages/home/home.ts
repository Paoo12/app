import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { TabsPage } from '../tabs/tabs';
import { ModulesPage } from '../modules/modules';
import { QuizPage } from '../quiz/quiz';
import { CalcPage } from '../calculator/calculator';
import { ScoresPage } from '../scores/scores';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController) {

  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  move()
  {
    this.navCtrl.push(TabsPage);
  }
  move1()
  {
    this.navCtrl.push(ModulesPage);
  }
  move3()
  {
    this.navCtrl.push(ScoresPage);  
  }
  move4()
  {
    this.navCtrl.push(CalcPage);
  }
}
