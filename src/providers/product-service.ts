import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class ProductService {
	public products = [
		[
			{
				title : "Tin of Milk", picture: "cement.jpg", description : "A 450g tin of milk.", price : 50
			},
		],
		
		[
			{
				title : "Bag of Cement", picture: "cement.jpg", description : "A bag of cement", price : 80
			},
		],

		[
			{
				title : "Litre of Petrol", picture: "cement.jpg", description : "A litre of mobile petrol", price : 100
			},
		],

		[
			{
				title : "Litre of Kerosene", picture: "cement.jpg", description : "A litre of chevron kerosene.", price : 150
			},
		],

		[
			{
				title : "Litre of diesel", picture: "cement.jpg", description : "A litre of total diesel.", price : 200
			},
		],

	];

  constructor(public http: Http) {

  }

  public getProducts(index){
  	return this.products[index];
  }


}
