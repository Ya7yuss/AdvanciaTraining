import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../Model/Personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
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
 personneToView: Personne;
 @Output() valueChange=new EventEmitter();
 ShowDataToView(){
   this.valueChange.emit(
     this.personneToView
   )
 }
  
  ShowDataItem(value){
    this.personneToView=value;
  }
    
  ngOnInit() {
  }

}
