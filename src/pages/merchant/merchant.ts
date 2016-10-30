import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Products } from '../products/products';
import { Order } from '../order/order';

import { CartService } from '../../providers/cart-service';

/*
  Generated class for the Merchant page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-merchant',
  templateUrl: 'merchant.html',
  providers: [CartService]
})

export class Merchant {

  public mycontent : any;
  public totalCartItems : any;

  constructor(public navCtrl: NavController, public cartService: CartService) {

  }

  cart() {
    this.navCtrl.push(Order);
  }

  ionViewDidEnter(){
    this.totalCartItems = this.cartService.getTotal();
  }

  ionViewDidLoad() {

  }

  productsPage(i){
  	this.navCtrl.push( Products, {"company_index": i} );
  }

}
