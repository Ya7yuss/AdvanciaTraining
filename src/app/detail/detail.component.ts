import { Component, OnInit, Input } from '@angular/core';
import { Personne } from '../Model/Personne';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personneToDis: Personne;
  constructor(private service:EmbaucheService) { }

  
  ngOnInit() {
    console.log('detail',this.personneToDis);
  }
  embauche(param: Personne) {
    this.service.addEmbauche(param);
  }

}
