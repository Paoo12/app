import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CalcPage } from '../pages/calculator/calculator';
import { ModulesPage } from '../pages/modules/modules';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

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
  closeMenu()
  {

  }
}

