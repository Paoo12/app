import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ModulesPage } from '../pages/modules/modules';
import { PopoverPage } from '../pages/popover/popover';
import { QuizPage } from '../pages/quiz/quiz';
import { TitlePage } from '../pages/module1/title';
import { Title2Page } from '../pages/module2/title2';
import { Title3Page } from '../pages/module3/title3';
import { Title4Page } from '../pages/module4/title4';
import { Title5Page } from '../pages/module5/title5';
import { P1Page } from '../pages/module1/page1/page1';
import { P2Page } from '../pages/module2/page2/page2';
import { P3Page } from '../pages/module3/page3/page3';
import { P4Page } from '../pages/module4/page4/page4';
import { P5Page } from '../pages/module5/page5/page5';
import { CalcPage } from '../pages/calculator/calculator';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ModulesPage,
    PopoverPage,
    QuizPage,
    TitlePage,
    Title2Page,
    Title3Page,
    Title4Page,
    Title5Page,
    P1Page,
    P2Page,
    P3Page,
    P4Page,
    P5Page,
    CalcPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ModulesPage,
    PopoverPage,
    QuizPage,
    TitlePage,
    Title2Page,
    Title3Page,
    Title4Page,
    Title5Page,
    P1Page,
    P2Page,
    P3Page,
    P4Page,
    P5Page,
    CalcPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
