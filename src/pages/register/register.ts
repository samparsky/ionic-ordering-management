import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Login } from '../login/login';
import { FirebaseAuth, AuthProviders, AuthMethods } from 'angularfire2';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {
  loader: any;
  user = { email: '', password: '', name: '', address: '', phone: '' };

  constructor( public navCtrl: NavController, public auth: FirebaseAuth, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {}

  ionViewDidLoad() {
    console.log('Hello Register Page');
  }

  login(){
  	this.navCtrl.push(Login);
  }

  showLoading(){
  	this.loader = this.loadingCtrl.create({
  		content: 'Please wait'
  	});
  	this.loader.present();
  }

  registerUser(){
  	this.showLoading();
  	this.auth.createUser(this.user).then( (authData) => {
  		setTimeout(()=>{
  			this.loader.dismiss();
  		});

  		let prompt = this.alertCtrl.create({
  			title: 'Succcess',
  			subTitle: 'You new Account was created',
  			buttons: ['OK']
  		});

  		prompt.present();
  	
  	}).catch((error) => {
  		alert(error);
  	})
  }

}
