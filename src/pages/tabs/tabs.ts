import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams     } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
    tab1Root: any = HomePage;

  constructor(public navCtrl: NavController) {

  }

}