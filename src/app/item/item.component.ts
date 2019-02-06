import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Personne } from '../Model/Personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne: Personne;
  @Output() valueChange=new EventEmitter();
  showData(){
    this.valueChange.emit(
      this.personne
    );
  }
  constructor() { }

  ngOnInit() {
    console.log(this.personne);
  }

}
