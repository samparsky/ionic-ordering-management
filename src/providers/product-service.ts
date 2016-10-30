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
				title : "Bag of Cement", picture: "cement.jpg", description : "A bag of cememnt", price : 50
			},
		],
		
		[
			{
				title : "Bag of Powder", picture: "cement.jpg", description : "A bag of cememnt", price : 50
			},
		],

		[
			{
				title : "Bag of Topic", picture: "cement.jpg", description : "A bag of cememnt", price : 50
			},
		],

		[
			{
				title : "Bag of power", picture: "cement.jpg", description : "A bag of cememnt", price : 50
			},
		],

		[
			{
				title : "Bag of mind", picture: "cement.jpg", description : "A bag of cememnt", price : 50
			},
		],

	];

  constructor(public http: Http) {

  }

  public getProducts(index){
  	return this.products[index];
  }


}
