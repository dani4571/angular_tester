import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  food:any;

  numClicks = 0;

  isDisabled:boolean = false;

  constructor() { }

  ngOnInit() {
    this.food = {
      name: 'apple',
      color: 'red',
      servincSize: '100 grams',
      calories: 52,
      protein: 0.3,
      fat: 0.2,
      carbs: 13.8,
      image: 'assets/images/apple.png'
    };
  }

  getFat() {
    return this.food.fat;
  }

  buttonClicked(data) {
    console.log(`A button click was detected`);
    console.log(data || 'not data passed in');
  }

}
