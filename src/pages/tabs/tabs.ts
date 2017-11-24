import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams     } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ModulesPage } from '../modules/modules';
import { QuizPage } from '../quiz/quiz';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
    // tab1Root: any = HomePage;
    // tab2Root: any = ModulesPage;
    // tab3Root: any = QuizPage;

  constructor(public navCtrl: NavController) {

  }

}
