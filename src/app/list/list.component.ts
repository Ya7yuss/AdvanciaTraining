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
    this.personnes=this.service.getCv(); 
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
