import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CartService } from '../../providers/cart-service';
/*
  Generated class for the Item page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item',
  templateUrl: 'item.html',
  providers: [CartService]
})
export class Item {
  public product : any;

  constructor(public navCtrl: NavController, public navParam: NavParams, public cartService : CartService, public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {
  	this.product = this.navParam.get('product');
    // console.log('Hello Item Page');
  }

  public addToCart(){
  	this.cartService.addItem(this.product);
	let prompt = this.alertCtrl.create({
		title: 'Succcess',
		subTitle: 'Item added to Cart',
		buttons: ['OK']
	});
	
	console.log(this.cartService.getItem());

	prompt.present();
	this.navCtrl.pop();
  }

  public close(){
  	this.navCtrl.pop();
  }

}
