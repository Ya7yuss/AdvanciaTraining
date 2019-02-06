import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/Personne';

@Component({
  selector: 'app-cv2',
  templateUrl: './cv2.component.html',
  styleUrls: ['./cv2.component.css']
})
export class Cv2Component implements OnInit {
  personneToDisplay: Personne;

  DisplayData(value){
    this.personneToDisplay=value;
  }
  constructor() { }

  ngOnInit() {
  }

}
