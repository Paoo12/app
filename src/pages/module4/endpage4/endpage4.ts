import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Quest4_5Page } from '../quest5/quest4_5';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopoverPage } from '../../popover/popover';
import { ModulesPage } from '../../modules/modules';
import { ScoresPage } from '../../scores/scores';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


@Component({
  selector: 'page-endpage4',
  templateUrl: 'endpage4.html'
})
export class End4Page {

    x:any;
    course4score: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public alertCtrl: AlertController) {
    this.x = this.navParams.get('score');
    this.course4score = this.x;
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
        subTitle:'With a score of ' + this.x + ', you need to review on the Practices Given on IPv4 Supernetting Course Module. There is an Example wherein it provides a 3 step process on IPv4 Supernetting.',
        buttons: ['OK']
      });
      alert.present();
    }

    else if((this.x>1)&&(this.x<4))
    {  
    let alert = this.alertCtrl.create({
        title: 'Feedback',
        subTitle:'With a score of ' + this.x + ', you have almost mastered IPv4 Supernetting. Do seperate practices  using different supernetting problems to master IPv4 Suppernetting.',
        buttons: ['OK']
      });
      alert.present();
    }

    else if((this.x==4)||(this.x==5))
    {  
    let alert = this.alertCtrl.create({
        title: 'Feedback',
        subTitle:'With a score of ' + this.x + ', you have mastered IPv4 Supernetting Concepts.',
        buttons: ['OK']
      });
      alert.present();
    }
  }
  
  back()
  {
      this.navCtrl.setRoot(ScoresPage, {total4: this.course4score});
  }

}