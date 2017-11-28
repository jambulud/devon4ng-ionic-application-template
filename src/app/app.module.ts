import { AuthServiceProvider } from '../providers/security/auth-service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { LoginComponent } from '../components/login/login.component';


import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';



import { HomePage } from '../pages/home/home';
import { LoginComponent } from '../components/login/login';
import { LoginProvider } from '../providers/login/loginProvider';
import { BussinessOperatorProvider } from '../providers/shared/bussiness-operator';







@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //AuthServiceProvider,
    BussinessOperatorProvider,
    HttpClient,
    LoginProvider,
    AuthServiceProvider,
  ]
})
export class AppModule {}
