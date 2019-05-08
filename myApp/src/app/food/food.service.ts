import { Injectable } from '@angular/core';
// RxJS 5
/*
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
*/

// RxJS 6
import * as _ from 'underscore';
import { HttpClient } from '@angular/common/http';
import { mergeAnalyzedFiles } from '@angular/compiler';
import { from, fromEvent, interval, merge, Observable, of, pipe, throwError } from 'rxjs';
import { catchError, delay, flatMap, map, mergeAll, retry, retryWhen, scan, take } from 'rxjs/operators';

import { passOnlyStartsWithVowel } from "../custom-operators/custom-operators";

export const FOOD_LIST = [
	"apple", "banana", "cherry", "eggs", "bacon"
];


@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) { }

  // RxJS 5
  /*
  getFoods():Observable<string> {
  	return Observable.from(FOOD_LIST);
  }

  getFoodsUppercase():Observable<string> {
  	return Observable.from(FOOD_LIST)
  		.map(food => food.toUpperCase() )
  }
  */

  // RxJS 6
  getFoods():Observable<string> {
  	return from(FOOD_LIST);
  }

  getFoodsUppercase():Observable<string> {
  	return from(FOOD_LIST)
  		.pipe(
  			map( food => food.toUpperCase() )
  		)
  }

  getVowelFoods():Observable<string> {
  	return from(FOOD_LIST)
  		.pipe(
  			passOnlyStartsWithVowel(),
  			map( food => food.toUpperCase() )
  		)
  }

  getFoods_p():Promise<any> {
  	return this.http.get("http://10.10.10.2:8080/foods-list")
  		.toPromise()
  }

  getFoods_e():Observable<any> {
    return Observable.create( observer => {
      let index = 0;

      setInterval( ()=> {
        let nextFood = FOOD_LIST[index];
        if(nextFood) {
          observer.next(nextFood);
          index++;
        }
        else {
          observer.error(new Error("Array access error"));
        }
      }, 1000)
    })
    .pipe(
      catchError( err =>{
        console.log(`There is some error with the observable`);
        console.log(`Dumping the entire list`);
        return of(FOOD_LIST);
      })
    )
  }

  getFoods_r():Observable<string> {
    let foods = [
      "apple", "cherry", "shoe", "eggs"
    ]

    return Observable.create( observer => {
      for (let f of foods) {
        if(f == 'shoe') {
          observer.error('Thats not a valid food');
        }
        observer.next(f);
      }
      observer.complete();
    })
    .pipe(
      retry(3)
    )
  }

  getFoods_rw():Observable<string> {
    let foods = [
      "apple", "cherry", "shoe", "eggs"
    ]

    return Observable.create( observer => {
      for (let f of foods) {
        if(f == "shoe") {
          observer.error('Thats not a valid food');
        }
        else {
          observer.next(f);
        }
      }
    })
    .pipe(
      retryWhen( (errors:Observable<any>) => {
        console.log(`Write to log system: error detected. retrying in 3 seconds.`)
        //errors.subscribe(
        //  val => console.log(`Write to log system: error detected. retrying in 3 seconds. ${val}`)
        //)

        return errors.pipe(
          delay(3000),
          take(3)
        )
      })
    )
  }

  getFruits():Observable<any> {
    let fruits = ['apple', 'banana', 'cherry'];

    let fruit$ = interval(2000)
    .pipe(
      map( time => `Have a fruit: ${fruits[ _.random(0, (fruits.length-1)) ]}` )
    )

    return fruit$
  }
  getVeggies():Observable<any> {
    let veggies = ['spinach', 'carrot', 'onion']

    let veggie$ = interval(2500)
    .pipe(
      map( time => `Have a vegetable: ${veggies[ _.random(0, (veggies.length-1)) ]}` )
    )

    return veggie$

  }
  getMeats():Observable<any> {
    let meats = ['chicken', 'duck', 'beef']

    let meat$ = interval(1500)
    .pipe(
      map( time => `Have some meat: ${meats[ _.random(0, (meats.length-1)) ]}` )
    )

    return meat$
  }
  getRandomFoods():Observable<any> {

    let random$ = merge(
      this.getFruits(),
      this.getVeggies(),
      this.getMeats()
    )

    return random$;
  }

  getFoods_l():Observable<any> {
    let foodUrls = [
      'http://10.10.10.1:8080/food/3',
      'http://10.10.10.1:8080/food/4',
      'http://10.10.10.1:8080/food/5'
    ]

    return from(foodUrls)
    .pipe(
      flatMap( (url:string) => this.http.get(url) )
    )
  }

}


