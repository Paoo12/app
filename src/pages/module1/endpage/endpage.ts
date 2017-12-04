import { Component } from '@angular/core';
import { NavController,NavParams, AlertController } from 'ionic-angular';
import { Quest10Page } from '../quest10/quest10';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopoverPage } from '../../popover/popover';
import { ModulesPage } from '../../modules/modules';
import { ScoresPage } from '../../scores/scores';


@Component({
  selector: 'page-endpage',
  templateUrl: 'endpage.html'
})
export class EndPage {

    x:any;
    course1score: any;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.x = this.navParams.get('score');
    this.course1score = this.x;
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
        subTitle:'With a score of ' + this.x + ', you need to review on the concepts of IP addressing and retake the exams to get a much higher score. You need to focus on the basic terminologies and distinct functions within IP addressing.',
        buttons: ['OK']
      });
      alert.present();
    }

    else if((this.x>5)&&(this.x<9))
    {  
    let alert = this.alertCtrl.create({
        title: 'Feedback',
        subTitle:'With a score of ' + this.x + ', you have almost mastered IP addressing and its terminologies and concepts. You dont need to retake the exam as you have understood the terminologies and usages.',
        buttons: ['OK']
      });
      alert.present();
    }

    else if((this.x==9)||(this.x==10))
    {  
    let alert = this.alertCtrl.create({
        title: 'Feedback',
        subTitle:'With a score of ' + this.x + ', you have mastered IP addressing concepts and terminologies.',
        buttons: ['OK']
      });
      alert.present();
    }
  }
  back()
  {
      this.navCtrl.setRoot(ScoresPage, {total: this.course1score});
  }

}