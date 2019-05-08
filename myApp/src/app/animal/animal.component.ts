import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  @Input('the-animal') animal:any;
  /*
  animal = {
  	name: "bee",
  	description: "yellow and black",
  	groupName: "swarm",
  	image: "/assets/images/bee.jpg"
  };
  */

  @Output() statusUpdate:EventEmitter<any> = new EventEmitter();
  currentStatus:string;

  constructor() { }

  ngOnInit() {

    this.currentStatus = ANIMAL_STATUS.AWAKE;

    setInterval(()=>{
      this.currentStatus = this.currentStatus == ANIMAL_STATUS.ASLEEP ? ANIMAL_STATUS.AWAKE : ANIMAL_STATUS.ASLEEP;
      this.sendUpdates();
    }, 2000);

  }

  sendUpdates() {
    this.statusUpdate.emit({
      name: this.animal.name,
      status: this.currentStatus
    })
  }

}

export const ANIMAL_STATUS = {
  ASLEEP: "asleep",
  AWAKE: "awake"
}