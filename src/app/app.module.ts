import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Merchant } from '../pages/merchant/merchant';
import { Products } from '../pages/products/products';
import { Item } from '../pages/item/item';
import { Register } from '../pages/register/register';
import { Login } from '../pages/login/login';
import { Order } from '../pages/order/order';
import { Storage } from '@ionic/storage';

import { FIREBASE_PROVIDERS, defaultFirebase, AngularFireModule, AuthProviders, AuthMethods  } from 'angularfire2';

const firebaseConfig = {
    apiKey: "AIzaSyCM_IbBDXRPMqelo1GVp-d2okWk9SEv0kY",
    authDomain: "order-management-7cc7d.firebaseapp.com",
    databaseURL: "https://order-management-7cc7d.firebaseio.com",
    storageBucket: "order-management-7cc7d.appspot.com",
    messagingSenderId: "261616945270"
};

const firebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Merchant,
    Products,
    Item,
    Register,
    Login,
    Order,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig)
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Merchant,
    Products,
    Item,
    Register,
    Login,
    Order,

  ],
  providers: []
})

export class AppModule {
  
}
