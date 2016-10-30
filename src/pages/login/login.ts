import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Register } from '../register/register';
import {  AuthProviders, AuthMethods, FirebaseAuth } from 'angularfire2';
import { Merchant } from '../merchant/merchant';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {
  loader: any;
  user = { email: '', password: '' };
  
  slideOptions = {
  	pager: true
  };

  constructor( public navCtrl: NavController, public auth: FirebaseAuth, private alertCtrl: AlertController, private loadingCtrl: LoadingController ) {}

  ionViewDidLoad() {
    console.log('Hello Login Page');
  }

  registerUser() {
  	this.navCtrl.push(Register);
  }

  showLoading(){
  	this.loader = this.loadingCtrl.create({
  		content: 'Please wait'
  	});
  	this.loader.present(this.loader);
  }

  showError(text){
  	setTimeout(()=>{
  		this.loader.dismiss()
  	});

  	let prompt = this.alertCtrl.create({
  		title : 'Fail',
  		subTitle: text,
  		buttons: ['OK']
  	});

  	prompt.present();
  
  }

  public login(){
  	this.showLoading();
  	this.auth.login(this.user, {
  		provider:  AuthProviders.Password,
  		method: AuthMethods.Password
  	}).then((authData) => {
      // alert(authData);
      console.log(JSON.stringify(authData));
  		this.loader.dismiss();
      window.localStorage.setItem("registered","true");
      this.navCtrl.setRoot(Merchant);
      // this.navCtrl.push(Merchant)
  	}).catch((error) => {
  		this.showError(error);
  	})
  }

  
}
