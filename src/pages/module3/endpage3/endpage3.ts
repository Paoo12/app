import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Quest3_5Page } from '../quest5/quest3_5';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopoverPage } from '../../popover/popover';
import { ModulesPage } from '../../modules/modules';
import { ScoresPage } from '../../scores/scores';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Component({
  selector: 'page-endpage3',
  templateUrl: 'endpage3.html'
})
export class End3Page {

    x:any;
    course3score: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public alertCtrl: AlertController) {
    this.x = this.navParams.get('score');
    this.course3score = this.x;
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  feedback()
  {
    if(this.x<2)
    {  
    let alert = this.alertCtrl.create({
        title: 'Feedback',
        subTitle:'With a score of ' + this.x + ', you need to review on the process of getting the Variable Length Sub Mask. This can be found on the course module where an example is given as well as the process on how to get the VLSM.',
        buttons: ['OK']
      });
      alert.present();
    }

    else if((this.x>1)&&(this.x<4))
    {  
    let alert = this.alertCtrl.create({
        title: 'Feedback',
        subTitle:'With a score of ' + this.x + ', you have almost mastered  IPv4 Variable Length Subnet Mask. Take your time and read through the Course modules again and try to do a seperate problem.',
        buttons: ['OK']
      });
      alert.present();
    }

    else if((this.x==4)||(this.x==5))
    {  
    let alert = this.alertCtrl.create({
        title: 'Feedback',
        subTitle:'With a score of ' + this.x + ', you have mastered IPv4 VLSM concepts. But do take note to keep Practicing on the topic.',
        buttons: ['OK']
      });
      alert.present();
    }
  }
  
  back()
  {
      this.navCtrl.setRoot(ScoresPage, {total3: this.course3score});
  }

}