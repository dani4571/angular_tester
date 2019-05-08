import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sports-list',
  templateUrl: './sports-list.component.html',
  styleUrls: ['./sports-list.component.css']
})
export class SportsListComponent implements OnInit {
  
  sports;
  
  constructor(private router:Router) { }

  ngOnInit() {
  	this.sports = SPORTS_DATA_SOURCE;
  }

  handleClick(name) {
  	this.router.navigateByUrl(`/sport/${name}`);
  }

}

export const SPORTS_DATA_SOURCE = [
  {
  	name: 'golf',
  	description: 'hit the ball in the hole',
  	image: 'assets/images/golf.jpg',
  },
  {
  	name: 'soccer',
  	description: 'kick the ball in the goal',
  	image: 'assets/images/soccer.jpg',
  },
  {
  	name: 'tennis',
  	description: 'hit the small ball over the net',
  	image: 'assets/images/tennis.jpg',
  },
  {
  	name: 'volleyball',
  	description: 'hit the big ball over the net',
  	image: 'assets/images/volleyball.jpg',
  }    
]