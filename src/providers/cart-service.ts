import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CartService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CartService {

  constructor(public http: Http) {
  	
    // console.log('Hello CartService Provider');
  }

  public getItem(){
  	if(window.localStorage.getItem("cart") != null ){
  		return JSON.parse(window.localStorage.getItem("cart"));
  	} else {
  		return [];
  	}
  }

  public addItem(item){
  	let cart_items = [];
  	
  	if(window.localStorage.getItem("cart") != null){
  		cart_items = JSON.parse(window.localStorage.getItem("cart"));
  	}

  	cart_items.push(item);
  	window.localStorage.setItem("cart", JSON.stringify(cart_items));
  	return true;
  }

  public removeItem(index){
  	
  }

  public getTotal(){
  	let cart_items = JSON.parse(window.localStorage.getItem("cart"));
  	if(cart_items != null)
  		return cart_items.length;
  	return 0;
  }

}
