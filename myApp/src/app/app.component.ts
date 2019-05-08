import { Component, OnInit } from '@angular/core';
import { FoodService } from './food/food.service';
import { LottoService } from './lotto/lotto.service';
import { HttpErrorResponse } from '@angular/common/http';

import { interval, of, from, pipe, fromEvent } from "rxjs";
import { map, delay, scan, pluck, bufferCount } from "rxjs/operators";
import { isNumber } from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myApp';

  button_text = "from host app";

  animals = [
    {
      name: "bee",
  	  description: "yellow and black",
  	  groupName: "swarm",
  	  image: "/assets/images/bee.jpg"
    },
    {
      name: "flamingo",
  	  description: "large pink bird",
  	  groupName: "flock",
  	  image: "/assets/images/flamingo.jpg"
    },
    {
      name: "frog",
  	  description: "tailless amphibian that jumps around",
  	  groupName: "school",
  	  image: "/assets/images/frog.jpg"
    },
    {
      name: "shark",
  	  description: "ocean predator",
  	  groupName: "army",
  	  image: "/assets/images/shark.jpg"
    },
    {
      name: "whale",
      description: "largest mammal in the sea",
      groupName: "pod",
      image: "/assets/images/whale.jpg"
    }
  ];


  constructor(private foodService:FoodService, private lottoService:LottoService){}

  ngOnInit() {
  }

  demo_getFoods_uppercase() {
    this.foodService.getVowelFoods().subscribe( food => {
      console.log(`value received: ${food}`)
    })
  }

  demo_getFoods_promise() {
    this.foodService.getFoods_p()
    .then( foods => console.log(foods))
    .catch( (err: HttpErrorResponse) => console.log(`error getting foods: ${err.error}`));
  }

  demo_getFoods_e() {
    this.foodService.getFoods_e()
    .subscribe(
      next => { console.log(`received emitted value: ${next}`)},
      error => { console.log(`received an error: ${error}`)},
      () => { console.log(`received stream complete`)}
    )
  }

  demo_getFoods_r() {
    this.foodService.getFoods_r()
    .subscribe(
      next => { console.log(`received emitted value: ${next}`) },
      error => { console.log(`received an error: ${error}`)},
      () => { console.log(`received stream complete`)}
     )
  }

  demo_getFoods_rw() {
    this.foodService.getFoods_rw()
    .subscribe(
      next => { console.log(`received emitted value: ${next}`) },
      error => { console.log(`received an error: ${error}`)},
      () => { console.log(`received stream complete`)}
     )
  }

  demo_getRandomFoods() {
    this.foodService.getRandomFoods()
    .subscribe(
      fruit => console.log(`${fruit}`)
    )
  }

  demo_listenForWinningTickets() {
    this.lottoService.ticketCheckAgent()
    .subscribe(
      next => { console.log(`received emitted value:`); console.log(next); },
      error => { console.log(`received an error ${error}`) },
      () => { console.log(`receieved stream complete`) }
    )
  }

  demo_getFoods_l() {
    this.foodService.getFoods_l()
    .subscribe(
      next => { console.log(next) },
      error => { console.log(`received an error ${error}`) },
      () => { console.log(`received getFoods_l stream complete`) }
    )
  }

  demo_scan() {
    let interval$ = interval(1000)

    interval$.pipe(
      scan( (acc, current) => {
        console.log(`current interval: ${current} / accumulated_value: ${acc}`)
        console.log(`Result = ${current} + ${acc}`)
        return acc + current
      })
    )
    .subscribe(
      value => console.log(value)
    )


  }

  demo_fours_exercise() {
    this.lottoService.fours_exercise()
    .subscribe(
      next => { console.log(`received emitted value: ${next}`)},
      error => { console.log(`received error ${error}`) },
      () => { console.log(`received stream complete`) }
    )
  }

  letterSelected(letter) {
    console.log(`The user selected a letter: ${letter}`);
  }

  handleStatusUpdate(animal:any) {
    console.log(` ${animal.name} is now ${animal.status}`);
  }

  set_button() {
    this.button_text = "new text"
  }
}
