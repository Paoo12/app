import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams     } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ModulesPage } from '../modules/modules';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
    tab1Root: any = HomePage;
    tab2Root: any = ModulesPage

  constructor(public navCtrl: NavController) {

  }

}
