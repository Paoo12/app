import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Quest5_10Page } from '../quest10/quest5_10';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopoverPage } from '../../popover/popover';
import { ModulesPage } from '../../modules/modules';
import { ScoresPage } from '../../scores/scores';
import { AlertCmp } from 'ionic-angular/components/alert/alert-component';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Component({
  selector: 'page-endpage5',
  templateUrl: 'endpage5.html'
})
export class End5Page {

    x:any;
    course5score: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public alertCtrl: AlertController) {
    this.x = this.navParams.get('score');
    this.course5score=this.x;
  }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  feedback()
  {
    if(this.x<6)
    {  
    let alert = this.alertCtrl.create({
        title: 'Feedback',
        subTitle:'With a score of ' + this.x + ', you need to review on the different terminologies as well as usage concepts of IPv6 wherein it has a varied approach than IPv4',
        buttons: ['OK']
      });
      alert.present();
    }

    else if((this.x>5)&&(this.x<9))
    {  
    let alert = this.alertCtrl.create({
        title: 'Feedback',
        subTitle:'With a score of ' + this.x + ', you have almost mastered IPv6 Subnetting concepts. Just take your time and review materials found on the course module and practice different methods in acquiring an IPv6 address.',
        buttons: ['OK']
      });
      alert.present();
    }

    else if((this.x==9)||(this.x==10))
    {  
    let alert = this.alertCtrl.create({
        title: 'Feedback',
        subTitle:'With a score of ' + this.x + ', you have mastered IPv6 addressing concepts and terminologies.',
        buttons: ['OK']
      });
      alert.present();
    }
  }
  
  back()
  {
      this.navCtrl.setRoot(ScoresPage, {total5: this.course5score});
  }

}