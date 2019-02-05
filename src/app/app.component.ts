import { Component, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { FilsComponent } from './fils/fils.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YahyaAngular';
  couleur="green";
  couleursonpref;
  ShowColorFils(value){
    console.log(value);
    this.couleursonpref=value;
  }
}
