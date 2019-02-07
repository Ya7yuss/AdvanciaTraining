import { Component, OnInit } from '@angular/core';
import { Personne } from '../Model/Personne';
import { FirstService } from '../services/first.service';

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
