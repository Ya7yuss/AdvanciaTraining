import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../Model/Personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personneToDis: Personne;
  constructor() { }

  
  ngOnInit() {
    console.log('detail',this.personneToDis);
  }

}
