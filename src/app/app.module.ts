import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
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

import { Quiz1Page } from '../pages/module1/quiz1/quiz1';
import { Quiz2Page } from '../pages/module2/quiz2/quiz2';
import { Quiz3Page } from '../pages/module3/quiz3/quiz3';
import { Quiz4Page } from '../pages/module4/quiz4/quiz4';
import { Quiz5Page } from '../pages/module5/quiz5/quiz5';



import { Quest1Page } from '../pages/module1/quest1/quest1';
import { Quest2Page } from '../pages/module1/quest2/quest2';
import { Quest3Page } from '../pages/module1/quest3/quest3';
import { Quest4Page } from '../pages/module1/quest4/quest4';
import { Quest5Page } from '../pages/module1/quest5/quest5';
import { Quest6Page } from '../pages/module1/quest6/quest6';
import { Quest7Page } from '../pages/module1/quest7/quest7';
import { Quest8Page } from '../pages/module1/quest8/quest8';
import { Quest9Page } from '../pages/module1/quest9/quest9';
import { Quest10Page } from '../pages/module1/quest10/quest10';

import { Quest2_1Page } from '../pages/module2/quest1/quest2_1';
import { Quest2_2Page } from '../pages/module2/quest2/quest2_2';
import { Quest2_3Page } from '../pages/module2/quest3/quest2_3';
import { Quest2_4Page } from '../pages/module2/quest4/quest2_4';
import { Quest2_5Page } from '../pages/module2/quest5/quest2_5';
import { Quest2_6Page } from '../pages/module2/quest6/quest2_6';
import { Quest2_7Page } from '../pages/module2/quest7/quest2_7';
import { Quest2_8Page } from '../pages/module2/quest8/quest2_8';
import { Quest2_9Page } from '../pages/module2/quest9/quest2_9';
import { Quest2_10Page } from '../pages/module2/quest10/quest2_10';

import { Quest3_1Page } from '../pages/module3/quest1/quest3_1';
import { Quest3_2Page } from '../pages/module3/quest2/quest3_2';
import { Quest3_3Page } from '../pages/module3/quest3/quest3_3';
import { Quest3_4Page } from '../pages/module3/quest4/quest3_4';
import { Quest3_5Page } from '../pages/module3/quest5/quest3_5';
import { Quest3_6Page } from '../pages/module3/quest6/quest3_6';
import { Quest3_7Page } from '../pages/module3/quest7/quest3_7';
import { Quest3_8Page } from '../pages/module3/quest8/quest3_8';
import { Quest3_9Page } from '../pages/module3/quest9/quest3_9';
import { Quest3_10Page } from '../pages/module3/quest10/quest3_10';

import { Quest4_1Page } from '../pages/module4/quest1/quest4_1';
import { Quest4_2Page } from '../pages/module4/quest2/quest4_2';
import { Quest4_3Page } from '../pages/module4/quest3/quest4_3';
import { Quest4_4Page } from '../pages/module4/quest4/quest4_4';
import { Quest4_5Page } from '../pages/module4/quest5/quest4_5';
import { Quest4_6Page } from '../pages/module4/quest6/quest4_6';
import { Quest4_7Page } from '../pages/module4/quest7/quest4_7';
import { Quest4_8Page } from '../pages/module4/quest8/quest4_8';
import { Quest4_9Page } from '../pages/module4/quest9/quest4_9';
import { Quest4_10Page } from '../pages/module4/quest10/quest4_10';

import { Quest5_1Page } from '../pages/module5/quest1/quest5_1';
import { Quest5_2Page } from '../pages/module5/quest2/quest5_2';
import { Quest5_3Page } from '../pages/module5/quest3/quest5_3';
import { Quest5_4Page } from '../pages/module5/quest4/quest5_4';
import { Quest5_5Page } from '../pages/module5/quest5/quest5_5';
import { Quest5_6Page } from '../pages/module5/quest6/quest5_6';
import { Quest5_7Page } from '../pages/module5/quest7/quest5_7';
import { Quest5_8Page } from '../pages/module5/quest8/quest5_8';
import { Quest5_9Page } from '../pages/module5/quest9/quest5_9';
import { Quest5_10Page } from '../pages/module5/quest10/quest5_10';
import { NavController } from 'ionic-angular/navigation/nav-controller';

import { EndPage } from '../pages/module1/endpage/endpage';
import { End2Page } from '../pages/module2/endpage2/endpage2';
import { End3Page } from '../pages/module3/endpage3/endpage3';
import { End4Page } from '../pages/module4/endpage4/endpage4';
import { End5Page } from '../pages/module5/endpage5/endpage5';
import { LoginPage } from '../pages/login/login';

import{ ScoresPage } from '../pages/scores/scores';


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
    Quiz1Page,
    Quiz2Page,
    Quiz3Page,
    Quiz4Page,
    Quiz5Page,
    Quest1Page,
    Quest2Page,
    Quest3Page,
    Quest4Page,
    Quest5Page,
    Quest6Page,
    Quest7Page,
    Quest8Page,
    Quest9Page,
    Quest10Page,
    Quest2_1Page,
    Quest2_2Page,
    Quest2_3Page,
    Quest2_4Page,
    Quest2_5Page,
    Quest2_6Page,
    Quest2_7Page,
    Quest2_8Page,
    Quest2_9Page,
    Quest2_10Page,

    Quest3_1Page,
    Quest3_2Page,
    Quest3_3Page,
    Quest3_4Page,
    Quest3_5Page,
    Quest3_6Page,
    Quest3_7Page,
    Quest3_8Page,
    Quest3_9Page,
    Quest3_10Page,

    Quest4_1Page,
    Quest4_2Page,
    Quest4_3Page,
    Quest4_4Page,
    Quest4_5Page,
    Quest4_6Page,
    Quest4_7Page,
    Quest4_8Page,
    Quest4_9Page,
    Quest4_10Page,

    Quest5_1Page,
    Quest5_2Page,
    Quest5_3Page,
    Quest5_4Page,
    Quest5_5Page,
    Quest5_6Page,
    Quest5_7Page,
    Quest5_8Page,
    Quest5_9Page,
    Quest5_10Page,

    EndPage,
    End2Page,
    End3Page,
    End4Page,
    End5Page,
    LoginPage,
    ScoresPage,
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
    Quiz1Page,
    Quiz2Page,
    Quiz3Page,
    Quiz4Page,
    Quiz5Page,
    Quest1Page,
    Quest2Page,
    Quest3Page,
    Quest4Page,
    Quest5Page,
    Quest6Page,
    Quest7Page,
    Quest8Page,
    Quest9Page,
    Quest10Page,
    Quest2_1Page,
    Quest2_2Page,
    Quest2_3Page,
    Quest2_4Page,
    Quest2_5Page,
    Quest2_6Page,
    Quest2_7Page,
    Quest2_8Page,
    Quest2_9Page,
    Quest2_10Page,

    Quest3_1Page,
    Quest3_2Page,
    Quest3_3Page,
    Quest3_4Page,
    Quest3_5Page,
    Quest3_6Page,
    Quest3_7Page,
    Quest3_8Page,
    Quest3_9Page,
    Quest3_10Page,

    Quest4_1Page,
    Quest4_2Page,
    Quest4_3Page,
    Quest4_4Page,
    Quest4_5Page,
    Quest4_6Page,
    Quest4_7Page,
    Quest4_8Page,
    Quest4_9Page,
    Quest4_10Page,

    Quest5_1Page,
    Quest5_2Page,
    Quest5_3Page,
    Quest5_4Page,
    Quest5_5Page,
    Quest5_6Page,
    Quest5_7Page,
    Quest5_8Page,
    Quest5_9Page,
    Quest5_10Page,

    EndPage,
    End2Page,
    End3Page,
    End4Page,
    End5Page,
    LoginPage,
    ScoresPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    

  
    
  ]
})
export class AppModule {}
