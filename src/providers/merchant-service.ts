import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MerchantService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class MerchantService {

  constructor(public http: Http) {
    // console.log('Hello MerchantService Provider');
  }

  

  create(){

  }

  public getName(index){
  	let names = ['Nestle Group', 'Dangote Group', 'Mobile Group', 'Chevron Group', 'Total Group'];
  	return names[index];
  }

}
