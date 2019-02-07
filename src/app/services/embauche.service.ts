import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  embauches: Personne [];
  constructor() { 
    this.embauches=[];
  }

  addEmbauche(param: Personne){
    const index = this.embauches.indexOf(param);
    if (index>=0){
      alert ('Déjà embauché')
    }
    else {
      this.embauches.push(param);
    }
    
  }
  getEmbauches(){
    return this.embauches;
  }
}
