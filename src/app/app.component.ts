import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { Merchant } from '../pages/merchant/merchant';
import { Login } from '../pages/login/login';

import { FIREBASE_PROVIDERS, defaultFirebase, AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
  // template: `<ion-nav id="nav" #content [root]="rootPage"></ion-nav>`
})

export class MyApp {
  rootPage : any;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
      StatusBar.overlaysWebView(true);
      StatusBar.backgroundColorByHexString("#387ef5");
      Splashscreen.hide();

      let loggedIn = window.localStorage.getItem("registered");
      if(loggedIn == "true"){
        this.rootPage = Merchant
      } else {
        this.rootPage = Login;
      }
    });
  }
}

