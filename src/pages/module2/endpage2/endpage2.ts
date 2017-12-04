import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Quest2_10Page } from '../quest10/quest2_10';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopoverPage } from '../../popover/popover';
import { ModulesPage } from '../../modules/modules';
import { ScoresPage } from '../../scores/scores';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Component({
  selector: 'page-endpage2',
  templateUrl: 'endpage2.html'
})
export class End2Page {

    x:any;
    course2score: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public alertCtrl: AlertController) {
    this.x = this.navParams.get('score');
    this.course2score = this.x
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
        subTitle:'With a score of ' + this.x + ', you need to review on IPv4 Subnetting again. Try to memorize the binary and decimal table which is within the course module wherein 128 until 255 have a distinct binary value as well as Differences in CIDR notation based on IP Classes.',
        buttons: ['OK']
      });
      alert.present();
    }

    else if((this.x>5)&&(this.x<9))
    {  
    let alert = this.alertCtrl.create({
        title: 'Feedback',
        subTitle:'With a score of ' + this.x + ', you have almost mastered IPv4 Subnetting concepts. Try to read the "Subnetting: The Quick and Easy Way" which is found in the course module wherein the quickest way to understand and create a subnet based on the IP address',
        buttons: ['OK']
      });
      alert.present();
    }

    else if((this.x==9)||(this.x==10))
    {  
    let alert = this.alertCtrl.create({
        title: 'Feedback',
        subTitle:'With a score of ' + this.x + ', you have mastered IPv4 Subnetting including how to get a subnet based on the IP address given.',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  
  back()
  {
      this.navCtrl.setRoot(ScoresPage, {total2: this.course2score});
  }

}