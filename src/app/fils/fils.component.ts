import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  @Input() couleurson;
  couleurpref="red";
  @Output() valueChange=new EventEmitter();
  showColor(){
    this.valueChange.emit(
      this.couleurpref
    );
  }
  constructor() { }

  ngOnInit() {
  }

}
