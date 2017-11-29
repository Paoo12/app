import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { templateSourceUrl } from '@angular/compiler';



@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html'
})
export class CalcPage {
    i1: any;
    i2: any;
    i3: any;
    i4: any;
    cidr: any;
    test: any;
  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, navParams: NavParams) {

 
 
}

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  calculate()
  {
    
    console.log(this.i1);
    console.log(this.i2);
    console.log(this.i3);
    console.log(this.i4);
  }
}