import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class CvSerService {
  personnes: Personne [];
  constructor() { 
    this.personnes = [
      new Personne(
        1,
        'ali',
        'bensalah',
        'BA',
        '35',
        'img1.png'
      ),
      new Personne(
        2,
        'yahya',
        'amara',
        'BA',
        '35',
        'img2.png'
        )
      ]
  }

  getCv(){
    return this.personnes;
  }
}
