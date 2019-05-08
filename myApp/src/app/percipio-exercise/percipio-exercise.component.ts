import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-percipio-exercise',
  templateUrl: './percipio-exercise.component.html',
  styleUrls: ['./percipio-exercise.component.css']
})
export class PercipioExerciseComponent implements OnInit {

  @Input() button_text:any;

  list_data = [
  	'hello',
  	'help',
  	'let it be',
  	'penny lane',
  	'strawberry fields',
  	'lucy in the sky'
  ];

  constructor() { }

  ngOnInit() {
  	this.button_text = "set me!"
  }

}
