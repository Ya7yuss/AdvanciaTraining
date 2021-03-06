import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Personne } from '../Model/Personne';
import { CvSerService } from '../services/cv-ser.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne [];
  constructor(private service: CvSerService) {
    this.service.getCv().subscribe(
      (personnes) => {
        this.personnes = personnes;
        console.log(personnes);
        return this.personnes;
      },
      (error) => {
        alert ("Problème rencontré");
      }
    )
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
