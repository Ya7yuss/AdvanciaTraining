import { Component, OnInit } from '@angular/core';
import { typeSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  isJsk=true;
  isTun=false;
  bye=true;
  constructor() {
   }

  ngOnInit() {
  }
  switch(sel){
    if (sel.value == 'JSK'){
      this.isJsk = true
      this.isTun = false 
      this.bye = true  
    }

    if (sel.value == 'TUN')
    {
      this.isTun = true  
      this.isJsk = false    
      this.bye = true  
    }
    if (sel.value == 'byebye')
    {
      this.bye = false  
    }
  }
}
