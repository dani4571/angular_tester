import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SPORTS_DATA_SOURCE } from '../sports-list/sports-list.component';
import { forEach } from '@angular/router/esm2015/src/utils/collection.js';

@Component({
  selector: 'app-sport-detail',
  templateUrl: './sport-detail.component.html',
  styleUrls: ['./sport-detail.component.css']
})
export class SportDetailComponent implements OnInit {

  sport;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  	let name = this.route.snapshot.paramMap.get('name');
  	console.log(`name is ${name}`);

  	this.getSportByName(name);
  }

  getSportByName(name:string) {
  	SPORTS_DATA_SOURCE.forEach( (sport)=>{
  	  if (sport.name == name) {
  	  	this.sport = sport
  	  }
  	})
  }

}
