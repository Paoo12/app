import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';



@Component({
  selector: 'page-login1',
  templateUrl: 'Login.html'
})
export class LoginPage {

    email:any;
    password:any;

    loading: Loading;


  constructor(public alertCtrl: AlertController,public LoadingCtrl: LoadingController, public navCtrl: NavController, public popoverCtrl: PopoverController, public navParams: NavParams) {

  }

  login1()
  {

    this.loading = this.LoadingCtrl.create({
        content: 'Please wait...',
        dismissOnPageChange: true
      });
      this.loading.present();
    
      if((this.email=="paoo")&&(this.password=="123"))
      {
          this.navCtrl.setRoot(HomePage);
      }

      else{
        this.loading.dismiss();
        let alert = this.alertCtrl.create({
            title: 'Invalid Login',
            subTitle: 'Check Your Credentials',
            buttons: ['OK']
          });
          alert.present();
      }
  }


 
}
