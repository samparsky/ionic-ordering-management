import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartService } from '../../providers/cart-service';

/*
  Generated class for the Order page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
  providers: [CartService]
})
export class Order {
	orders: any;
  constructor(public navCtrl: NavController, public cartService: CartService) {}

  ionViewDidLoad() {
  }

  ionViewWillEnter(){
  	this.orders = this.cartService.getItem();
  	console.log(this.orders);

  }



}
