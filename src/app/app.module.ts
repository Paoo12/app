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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
