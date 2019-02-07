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

  deleteEmabuche(parm: Personne){
    const index = this.embauches.indexOf(parm);
    if (index<0){
      alert ('index not found')
    }
    else {
      this.embauches.splice(index,1);
    }
  }
}
