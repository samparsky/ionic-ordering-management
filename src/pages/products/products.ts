import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { Item } from '../item/item';
import { MerchantService } from '../../providers/merchant-service';
import { ProductService } from '../../providers/product-service';
import { CartService } from '../../providers/cart-service';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
  providers: [ MerchantService, ProductService, CartService],
})
export class Products {

  public companyIndex : any;
  public title : any;
  public products : any ;
  public totalCartItems: any;

  constructor( public navCtrl: NavController, 
               public modalCtrl: ModalController, 
               public navParam: NavParams, 
               public merchantService: MerchantService,
               public productService: ProductService,
               public cartService: CartService,
              ) {

    this.companyIndex = navParam.get('company_index');

  }

  ionViewDidEnter(){
    this.totalCartItems = this.cartService.getTotal();
  }

  ionViewDidLoad() {
    this.title = this.merchantService.getName(this.companyIndex);
    this.products = this.productService.getProducts(this.companyIndex);

    // console.log('Hello Products Page');
  }



  itemPage(product_index, product) {
    console.log(product);
  	let modal = this.modalCtrl.create(Item, {product : product, product_index: product_index, merchant_index: this.companyIndex});
    modal.present();
  }

}
