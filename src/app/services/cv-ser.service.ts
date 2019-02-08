import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CvSerService {
  personnes: Personne [];
  apiLink="http://localhost:3000/api/personnes";
  constructor(private http:HttpClient) { 

    // this.personnes = [
    //   new Personne(
    //     1,
    //     'ali',
    //     'bensalah',
    //     'BA',
    //     '35',
    //     'img1.png'
    //   ),
    //   new Personne(
    //     2,
    //     'yahya',
    //     'amara',
    //     'BA',
    //     '35',
    //     'img2.png'
    //     )
    //   ]
  }

  getCv(){
    return this.http.get <Personne []>(this.apiLink);
}
  getIndex(param: Personne){
     return this.personnes.indexOf(param);
  }
  getPersonFromIndex(id){
    return this.personnes[id];
  }
}
