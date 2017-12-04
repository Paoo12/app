import { Component } from '@angular/core';
import { NavController, PopoverController, NavParams } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-scores',
  templateUrl: 'scores.html'
})
export class ScoresPage {
    course1: any;
    course2: any;
    course3: any;
    course4: any;
    course5: any;


    constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public navParams: NavParams) {
        this.course1 = this.navParams.get('total');
        this.course2 = this.navParams.get('total2');
        this.course3 = this.navParams.get('total3');
        this.course4 = this.navParams.get('total4');
        this.course5 = this.navParams.get('total5');
          }


        
          presentPopover(myEvent) {
            let popover = this.popoverCtrl.create(PopoverPage);
            popover.present({
              ev: myEvent
            });
          }

          

}