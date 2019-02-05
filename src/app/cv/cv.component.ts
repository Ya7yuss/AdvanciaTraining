import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  Name="AMARA"
  Prename="Med Yahya"
  Metier="BA"
  Picture="rotating_card_profile2"
  Cita="To be or Not to be"
  Decr="Analyste fonctionnel"
  Mots="Buisness"
  constructor() { }

  ngOnInit() {
  }

}
