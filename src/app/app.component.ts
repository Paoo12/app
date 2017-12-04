import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CalcPage } from '../pages/calculator/calculator';
import { ModulesPage } from '../pages/modules/modules';

import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
 
  rootPage:any = LoginPage;
 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
    
      statusBar.styleDefault();
      splashScreen.show();
    });

   
  }

  openPage()
  {
    this.nav.setRoot(HomePage);
  }
  openPage1()
  {
    this.nav.setRoot(ModulesPage);
  }
  openPage2()
  {
    this.nav.setRoot(CalcPage);
  }
  logout()
  {
    this.nav.setRoot(LoginPage);
  }

}

