import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {

  color='';
  fontFamily='';
  fontSize='';
  constructor() {
   }
  setColor(param){
     this.color=param.value;
  }
  setFont(myFont){
    this.fontFamily=myFont.value;
  }
  setSize(mySize){
    this.fontSize=mySize.value+'px';
    console.log(this.fontSize)
  }

  ngOnInit() {
  }

}
